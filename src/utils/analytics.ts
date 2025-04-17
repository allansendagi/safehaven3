// src/utils/analytics.ts

/**
 * Utility for tracking custom analytics events in the application
 */

// *
//  * Track a custom event through the analytics API
//  * 
 // * @param eventType - The type/name of the event to track
 // * @param eventData - Optional additional data to associate with the event
 // * @returns Promise resolving to true if the event was tracked successfully
 
export async function trackEvent(eventType: string, eventData: Record<string, any> = {}): Promise<boolean> {
  try {
    const response = await fetch('/analytics/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventType,
        eventData
      }),
    });
    
    if (!response.ok) {
      console.warn(`Analytics event tracking failed with status: ${response.status}`);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Failed to track analytics event:', error);
    return false;
  }
}

/**
 * Common event types for consistency across the application
 */
export const EventTypes = {
  // Page/Section Engagement
  PAGE_VIEW: 'page_view',
  SECTION_VIEW: 'section_view',
  
  // User Interactions
  BUTTON_CLICK: 'button_click',
  LINK_CLICK: 'link_click',
  FORM_SUBMIT: 'form_submit',
  
  // Content Engagement
  DOWNLOAD: 'download',
  READ_MORE: 'read_more',
  TOGGLE_EXPAND: 'toggle_expand',
  
  // Assessment Events
  ASSESSMENT_START: 'assessment_start',
  ASSESSMENT_COMPLETE: 'assessment_complete',
  ASSESSMENT_ABANDON: 'assessment_abandon',
  
  // Custom Events
  CUSTOM: 'custom'
};