export default function useMediaQuery(query: string): boolean {
  // Define your mock implementation here based on the query condition
  if (query === '(min-width: 730px)') {
    return true; // Mock condition for desktop or laptop
  } else {
    return false; // Mock condition for mobile
  }
}