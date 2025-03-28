"use client";

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const SelfCorrectionVisualization = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  
  useEffect(() => {
    if (!svgRef.current) return;
    
    // Clear any previous content
    d3.select(svgRef.current).selectAll('*').remove();
    
    const width = svgRef.current.clientWidth;
    const height = 400; // Reduced height for better fit
    
    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);
    
    // Define the center point and radius for the circular flow
    const centerX = width / 2;
    const centerY = height / 2 - 30; // Moved upward by 30px
    const radius = Math.min(width, height) / 3.2;
    
    // Create a group for the visualization
    const vizGroup = svg.append('g')
      .attr('transform', `translate(${centerX}, ${centerY})`);
    
    // Add a subtle background circle for the entire framework
    vizGroup.append('circle')
      .attr('r', radius + 60)
      .attr('fill', '#f8fafc')
      .attr('stroke', '#e2e8f0')
      .attr('stroke-width', 1);
    
    // Define the three stages of the self-correction process
    const stages = [
      { 
        id: 'diagnosis', 
        name: 'Diagnosis', 
        description: 'SRI flags weak points', 
        color: '#3B82F6', 
        icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', 
        pillar: 'SRI',
        iconScale: 1.3
      },
      { 
        id: 'intervention', 
        name: 'Intervention', 
        description: 'Targeted programs & policies', 
        color: '#10B981', 
        icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4', 
        pillar: 'AI TownSquare',
        iconScale: 1.1
      },
      { 
        id: 'remeasurement', 
        name: 'Re-measurement', 
        description: 'Recalculate SRI scores', 
        color: '#EC4899', 
        icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', 
        pillar: 'Readiness Institute',
        iconScale: 1.3
      }
    ];
    
    // Calculate positions for each stage (equally spaced around a circle)
    const angleStep = (2 * Math.PI) / stages.length;
    stages.forEach((stage, i) => {
      const angle = i * angleStep - Math.PI / 2; // Start from the top
      stage['x'] = radius * Math.cos(angle);
      stage['y'] = radius * Math.sin(angle);
    });
    
    // Draw connecting arrows between stages (circular flow)
    // Create separate arcs for each segment to avoid criss-crossing
    stages.forEach((stage, i) => {
      const nextIndex = (i + 1) % stages.length;
      const currentAngle = i * angleStep - Math.PI / 2;
      const nextAngle = nextIndex * angleStep - Math.PI / 2;
      
      // Create an arc path for this segment
      const arcPath = d3.path();
      arcPath.arc(0, 0, radius, currentAngle, nextAngle);
      
      // Draw the arc with the stage's color and make it more visible
      vizGroup.append('path')
        .attr('d', arcPath.toString())
        .attr('fill', 'none')
        .attr('stroke', stage.color)
        .attr('stroke-width', 2.5)
        .attr('stroke-opacity', 0.6)
        .attr('stroke-dasharray', '6,3');
      
      // Calculate a point along the arc for the arrowhead
      const midAngle = (currentAngle + nextAngle) / 2;
      const arrowX = radius * Math.cos(midAngle);
      const arrowY = radius * Math.sin(midAngle);
      
      // Calculate the angle for the arrowhead
      const arrowAngle = midAngle + Math.PI / 2;
      
      // Draw the arrowhead with the stage's color
      vizGroup.append('polygon')
        .attr('points', '0,-6 6,6 -6,6')
        .attr('transform', `translate(${arrowX}, ${arrowY}) rotate(${arrowAngle * 180 / Math.PI})`)
        .attr('fill', stage.color);
    });
    
    // Create stage nodes
    const stageGroups = vizGroup.selectAll('.stage')
      .data(stages)
      .enter()
      .append('g')
      .attr('class', 'stage')
      .attr('transform', d => `translate(${d['x']}, ${d['y']})`);
    
    // Add circular backgrounds for each stage with a subtle glow effect
    stageGroups.append('circle')
      .attr('r', 45)
      .attr('fill', 'white')
      .attr('stroke', d => d.color)
      .attr('stroke-width', 3);
    
    // Add a subtle shadow/glow effect
    stageGroups.append('circle')
      .attr('r', 45)
      .attr('fill', d => d.color)
      .attr('opacity', 0.1);
    
    // Add icons to each stage - properly centered
    stageGroups.append('svg')
      .attr('width', d => 30 * d.iconScale)
      .attr('height', d => 30 * d.iconScale)
      .attr('x', d => -15 * d.iconScale)
      .attr('y', d => -15 * d.iconScale)
      .append('path')
      .attr('d', d => d.icon)
      .attr('fill', 'none')
      .attr('stroke', d => d.color)
      .attr('stroke-width', 2.5)
      .attr('stroke-linecap', 'round')
      .attr('stroke-linejoin', 'round');
    
    // Add stage names with larger, more visible text
    stageGroups.append('text')
      .attr('y', 60)
      .attr('text-anchor', 'middle')
      .attr('font-weight', 'bold')
      .attr('font-size', '14px')
      .attr('fill', d => d.color)
      .text(d => d.name);
    
    // Add pillar names with larger text
    stageGroups.append('text')
      .attr('y', 75)
      .attr('text-anchor', 'middle')
      .attr('font-weight', 'bold')
      .attr('font-size', '12px')
      .attr('fill', d => d.color)
      .text(d => d.pillar);
    
    // Add stage descriptions with larger text
    stageGroups.append('text')
      .attr('y', 90)
      .attr('text-anchor', 'middle')
      .attr('font-size', '10px')
      .attr('fill', '#64748B')
      .text(d => d.description);
    
    // Add central element representing the self-correcting framework
    // Create a more prominent central element
    vizGroup.append('circle')
      .attr('r', 55)
      .attr('fill', 'white')
      .attr('stroke', '#1E40AF')
      .attr('stroke-width', 3);
    
    // Add a subtle glow effect
    vizGroup.append('circle')
      .attr('r', 55)
      .attr('fill', '#1E40AF')
      .attr('opacity', 0.1);
    
    vizGroup.append('text')
      .attr('text-anchor', 'middle')
      .attr('font-weight', 'bold')
      .attr('font-size', '12px')
      .attr('fill', '#1E40AF')
      .attr('y', -15)
      .text('Self-Correcting');
    
    vizGroup.append('text')
      .attr('text-anchor', 'middle')
      .attr('font-weight', 'bold')
      .attr('font-size', '12px')
      .attr('fill', '#1E40AF')
      .attr('y', 8)
      .text('Framework');
    
    vizGroup.append('text')
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('fill', '#64748B')
      .attr('y', 28)
      .text('Closing the readiness gap');
    
    // Add the case study example with improved visibility - moved to top right
    const caseStudyGroup = svg.append('g')
      .attr('transform', `translate(${width - 190}, 20)`);
    
    // Add a more prominent case study box with a subtle shadow
    caseStudyGroup.append('rect')
      .attr('width', 180)
      .attr('height', 130)
      .attr('rx', 8)
      .attr('ry', 8)
      .attr('fill', 'white')
      .attr('stroke', '#CBD5E1')
      .attr('stroke-width', 1.5)
      .attr('filter', 'drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.1))');
    
    caseStudyGroup.append('text')
      .attr('x', 90)
      .attr('y', 20)
      .attr('text-anchor', 'middle')
      .attr('font-weight', 'bold')
      .attr('font-size', '14px')
      .attr('fill', '#1E40AF')
      .text('Case Study: City Implementation');
    
    // Diagnosis section with larger text
    caseStudyGroup.append('text')
      .attr('x', 12)
      .attr('y', 40)
      .attr('font-weight', 'bold')
      .attr('font-size', '12px')
      .attr('fill', '#3B82F6')
      .text('Diagnosis:');
    
    caseStudyGroup.append('text')
      .attr('x', 12)
      .attr('y', 55)
      .attr('font-size', '11px')
      .attr('fill', '#64748B')
      .text('SRI flags "Citizen Empowerment" and');
    
    caseStudyGroup.append('text')
      .attr('x', 12)
      .attr('y', 70)
      .attr('font-size', '11px')
      .attr('fill', '#64748B')
      .text('"Economic Adaptability" as weak points');
    
    // Intervention section with larger text
    caseStudyGroup.append('text')
      .attr('x', 12)
      .attr('y', 90)
      .attr('font-weight', 'bold')
      .attr('font-size', '12px')
      .attr('fill', '#10B981')
      .text('Intervention:');
    
    caseStudyGroup.append('text')
      .attr('x', 12)
      .attr('y', 105)
      .attr('font-size', '11px')
      .attr('fill', '#64748B')
      .text('AI TownSquare training programs and');
    
    caseStudyGroup.append('text')
      .attr('x', 12)
      .attr('y', 120)
      .attr('font-size', '11px')
      .attr('fill', '#64748B')
      .text('Readiness Institute literacy materials');
    
    // Results section with larger text
    caseStudyGroup.append('rect')
      .attr('x', 0)
      .attr('y', 130)
      .attr('width', 180)
      .attr('height', 25)
      .attr('fill', '#EC4899')
      .attr('opacity', 0.1)
      .attr('rx', 0)
      .attr('ry', 0);
    
    caseStudyGroup.append('text')
      .attr('x', 90)
      .attr('y', 147)
      .attr('text-anchor', 'middle')
      .attr('font-weight', 'bold')
      .attr('font-size', '12px')
      .attr('fill', '#EC4899')
      .text('Result: SRI Score +16 points in 6 months');
    
    // Add responsive resize handler
    const resizeVisualization = () => {
      if (!svgRef.current) return;
      
      const newWidth = svgRef.current.clientWidth;
      const newHeight = 400;
      
      // Update SVG dimensions
      svg.attr('width', newWidth)
         .attr('height', newHeight);
      
      // Update center point
      const newCenterX = newWidth / 2;
      
      // Update visualization group position - maintain the upward shift
      vizGroup.attr('transform', `translate(${newCenterX}, ${newHeight / 2 - 30})`);
      
      // Update case study position - now at top right
      caseStudyGroup.attr('transform', `translate(${newWidth - 190}, 20)`);
    };
    
    window.addEventListener('resize', resizeVisualization);
    
    return () => {
      window.removeEventListener('resize', resizeVisualization);
    };
  }, []);
  
  return (
    <div className="w-full h-full">
      <svg ref={svgRef} className="w-full h-full"></svg>
      <div className="mt-4 text-sm text-gray-700 text-center font-medium">
        <p>The self-correcting framework ensures that as AI evolves, society adapts—closing the readiness gap one pillar at a time.</p>
      </div>
    </div>
  );
};

export default SelfCorrectionVisualization;
