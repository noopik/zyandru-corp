export function extractNameFromEmail(email: string): string {
  const [username] = email.split('@');
  const [firstName, lastName] = username.split('.');
  return `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)} ${lastName
    .charAt(0)
    .toUpperCase()}${lastName.slice(1)}`;
}
