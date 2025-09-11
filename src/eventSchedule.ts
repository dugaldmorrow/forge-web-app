import { Event } from './Event';

const utm_medium = 'forge-web-app';
const utm_source = 'forge-web-app';
const utm_campaign = 'forge-web-app';

export const eventSchedule: Event[] = [
  {
    startDate: new Date(`26 August, 2025`),
    endDate: new Date(`26 August, 2025`),
    title: `Developer Day`,
    location: `Sydney`,
    url: `https://events.atlassian.com/dev-day-sydney?utm_medium=${utm_medium}&utm_source=${utm_source}&utm_campaign=${utm_campaign}`
  },
  {
    startDate: new Date(`23 September, 2025`),
    endDate: new Date(`23 September, 2025`),
    title: `Developer Day`,
    location: `Dallas, Texas`,
    url: `https://events.atlassian.com/dev-day-dallas?utm_medium=${utm_medium}&utm_source=${utm_source}&utm_campaign=${utm_campaign}`
  },
  {
    startDate: new Date(`7 October, 2025`),
    endDate: new Date(`9 October, 2025`),
    title: `Team '25 Europe`,
    location: `Barcelona, Spain`,
    url: `https://events.atlassian.com/teameurope?utm_medium=${utm_medium}&utm_source=${utm_source}&utm_campaign=${utm_campaign}`
  },
  {
    startDate: new Date(`13 October, 2025`),
    endDate: new Date(`13 October, 2025`),
    title: `London Atlassian Community Meetup`,
    location: `London, UK`,
    url: `https://ace.atlassian.com/events/details/atlassian-london-presents-team-europe-25-community-led-conference/?utm_medium=${utm_medium}&utm_source=${utm_source}&utm_campaign=${utm_campaign}`
  },
  {
    startDate: new Date(`16 October, 2025`),
    endDate: new Date(`16 October, 2025`),
    title: `Cologne Atlassian Community Meetup`,
    location: `Cologne, Germany`,
    url: `https://ace.atlassian.com/events/details/atlassian-cologne-presents-cheers-to-10-years-of-innovation-networking-amp-team-25-insights/cohost-cologne/?utm_medium=${utm_medium}&utm_source=${utm_source}&utm_campaign=${utm_campaign}`
  },
  {
    startDate: new Date(`16 October, 2025`),
    endDate: new Date(`16 October, 2025`),
    title: `Madrid Atlassian Community Meetup`,
    location: `Madrid, Spain`,
    url: `https://ace.atlassian.com/events/details/atlassian-madrid-presents-de-camino-al-code-un-hackathon-sobre-forge/cohost-madrid/?utm_medium=${utm_medium}&utm_source=${utm_source}&utm_campaign=${utm_campaign}`
  },
  {
    startDate: new Date(`13 November, 2025`),
    endDate: new Date(`13 November, 2025`),
    title: `Developer Day`,
    location: `Bellevue, Washington`,
    url: `https://events.atlassian.com/dev-day-bellevue?utm_medium=${utm_medium}&utm_source=${utm_source}&utm_campaign=${utm_campaign}`
  },
];
