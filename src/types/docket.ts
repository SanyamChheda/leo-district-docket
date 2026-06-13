export interface DocketSection {
  id: string
  heading: string
  content: string
}

export interface TeamMember {
  name: string
  districtPosition: string
  homeClub: string
  contact: string
  photo: string
}

export interface DocketData {
  title: string
  slug: string
  banner: string
  introduction: string
  overview: {
    vision: string
    mission: string
    goals: string
  }
  sections: DocketSection[]
  teamMembers: TeamMember[]
  shortDescription: string
  icon: string
}
