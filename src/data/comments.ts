export type CommentType = {
  username: string;
  userImagePath: string;
  commentText: string;
  likeNum: number;
  replies: CommentType[]
}

export const comments: CommentType[] = [
  {
    username: 'Lisa',
    userImagePath: '/profileImages/lisa.jpg',
    commentText: 'คือลือน่ะ',
    likeNum: 999,
    replies: [
      {
        username: 'หมาน้อย',
        userImagePath: '/profileImages/puppy.jpg',
        commentText: 'จัดมาดิ้',
        likeNum: 0,
        replies: []
      },
      {
        username: 'แมวตัวหนึ่ง',
        userImagePath: '/profileImages/popcat.png',
        commentText: 'แบบ เบิ้มๆ',
        likeNum: 2,
        replies: []
      }
    ]
  },
  {
    username: 'Charlie Brown',
    userImagePath: '/profileImages/charliebrown.jpg',
    commentText: 'อยากสัมผัสต้นเฉาก๋วย',
    likeNum: 207,
    replies: []
  }
]

