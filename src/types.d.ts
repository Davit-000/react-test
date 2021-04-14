export type Status = "success" | "loading" | "error";

export interface Url {
  id: number;
  text: string;
  status: null|Status;
}
