export interface Topic {
  id: number,
  title: string,
  userId: string,
  userName: string,
  content: string,
  comments: Comment[]
}

export interface Comment {
  id: number,
  content: string,
  score: number,
  user: {
    id: number,
    username: string
  }
}

export interface MatchProps {
  params: any,
  isExact: boolean,
  path: string,
  url: string
}

