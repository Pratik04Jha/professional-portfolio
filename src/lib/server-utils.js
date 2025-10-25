import fs from "fs";
import matter from "gray-matter";

const projectData = fs.readdirSync("src/content/projectDetails", "utf-8");

export const details = projectData.map((file) => {
  const content = fs.readFileSync(
    `src/content/projectDetails/${file}`,
    "utf-8"
  );
  const { data } = matter(content);
  return data;
});


const educationData = fs.readdirSync("src/content/educationDetails", "utf-8");

export const educationDetails = educationData.map((file) => {
  const educationContent = fs.readFileSync(
    `src/content/educationDetails/${file}`,
    "utf-8"
  );
  const { data } = matter(educationContent);
  return data;
});
