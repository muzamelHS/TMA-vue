export interface TableActions {
  to?: string
  deleteAction?: () => Promise<void>
  label: string
}
