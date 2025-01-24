import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

try {
  const newUser = await prisma.user.create({
    data: {
      name: "juan",
      lastName: "hola",
      email: "holajuan@gmail.com" ,
    },
  });

  console.log(user);
} catch (e) {
  console.error(e);
}

const newPost = await prisma.post.create({
  data: {
    title: "Post",
    content: "Post Content",
    published: true,
    author: {
      connect: {
        id: newUser.id,
        lastName: newUser.lastName
      },
    },
  },
});