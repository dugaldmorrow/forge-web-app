import { WebTriggerRequest } from '@forge/api';
import { eventSchedule } from './eventSchedule';
import { Event } from './Event';

const pageTitle = `Upcoming Forge Events`;

/**
 * @returns {import('@forge/api').WebTriggerResponse}
 */
const buildOutput = (rnd) => ({
  body: renderEventsPage(),
  headers: {
    'Content-Type': ['text/html'],
    'X-Request-Id': [`rnd-${rnd}`]
  },
  statusCode: 200,
  statusText: 'OK'
});

/**
 * @param {import('@forge/api').WebTriggerRequest} event
 * @param {import('@forge/api').WebTriggerContext} context
 * @returns {Promise<import('@forge/api').WebTriggerResponse>}
 */
export const onGet = (event: WebTriggerRequest, context) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = buildOutput(Math.random());
      resolve(result);
    }, 1000);
  });
};

/**
 * Converts the dates into a short date range string
 * Example A: startDate = 26 August, 2025 and endDate = 26 August, 2025 => "26 August, 2025"
 * Example B: startDate = 7 October, 2025 and endDate = 9 October, 2025 => "7 - 9 October, 2025"
 * Example C: startDate = 31 January, 2026 and endDate = 4 February, 2026 => "31 January - 4 February, 2026"
 */
const formatEventDate = (startDate: Date, endDate: Date): string => {
  if (startDate === endDate) {
    return startDate.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
  } else {
    if (startDate.getDate() === endDate.getDate() && startDate.getMonth() === endDate.getMonth() && startDate.getFullYear() === endDate.getFullYear()) {
      return startDate.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
    } else if (startDate.getMonth() === endDate.getMonth() && startDate.getFullYear() === endDate.getFullYear()) {
      return `${startDate.toLocaleDateString('en-AU', { day: 'numeric' })} - ${endDate.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}`;
    } else if (startDate.getFullYear() === endDate.getFullYear()) {
      return `${startDate.toLocaleDateString('en-AU', { day: 'numeric', month: 'long' })} - ${endDate.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}`;
    } else {
      return `${startDate.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })} - ${endDate.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}`;
    }
  }
}

const findUpcomingEvents = (): Event[] => {
  const allEvents = eventSchedule;
  const upcomingEvents = allEvents.filter(event => {
    const eventEndDate = new Date(event.endDate);
    const now = new Date();
    return eventEndDate >= now;
  });
  return upcomingEvents;
}

const renderStyles = (): string => {
  return `
    <style>
      html {
        font-family: Arial, sans-serif;
        font-size: 16px;
      }
      body {
        padding: 20px;
      }
      div.schedule {
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }
      div.event-item {
        border: 1px solid #ccc;
        border-radius: 8px;
        margin-bottom: 8px;
      }
      div.event-item > .event-content {
        padding: 8px;
      }
      div.event-item > .header {
        font-weight: bold;
        background-color: #f4f5f7;
        border-bottom: 1px solid #ccc;
      }
      div.event-item .event-title {
       font-weight: bold;
      }
      div.event-item .event-location {
       font-weight: bold;
      }
      div.event-item .event-link {
       font-weight: bold;
      }
    </style>
  `.trim();
}

const renderEvents = (events: Event[]): string => {
  const sortedEvents = events.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
  return sortedEvents.map(event => {
    return `
      <div class="event-item">
        <div class="header event-content">
          ${formatEventDate(event.startDate, event.endDate)}
        </div>
        <div class="event-content">
          <div class="event-title">
            ${event.title}
          </div>
          <div class="event-location">
            ${event.location}
          </div>
          <div class="event-link">
            <a href="${event.url}" target="_blank" rel="noopener noreferrer">Event Link</a>
          </div>
        </div>
      </div>
    `.trim();
  }).join('\n')
}

const renderForgeEventsSchedule = (): string => {
  const upcomingEvents = findUpcomingEvents();
  const renderedEvents = upcomingEvents.length > 0 ? renderEvents(upcomingEvents) : `<p>Sorry, no upcoming events have been found.</p>`;
  return `
    <div class="schedule">
      <h1>${pageTitle}</h1>
      ${renderedEvents}
    </div>
  `.trim();
}

const renderEventsPage = (): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${pageTitle}</title>
        ${renderStyles()}
      </head>
      <body>
        ${renderForgeEventsSchedule()}
      </body>
    </html>
  `;
}
