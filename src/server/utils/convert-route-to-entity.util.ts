const mapping: Record<string, string> = {
  investors: 'investor',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
