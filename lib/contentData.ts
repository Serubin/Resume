import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const contentDirectory = path.join(process.cwd(), 'data');

export default function getStaticContent(sections: string[]) {
  const sectionNames = sections.map(section => section.toLowerCase());

  const fileNames = fs.readdirSync(contentDirectory);

  const staticData = fileNames
    .filter((fileName: string) => sectionNames.includes(fileName.toLowerCase().replace('.yml', '')))
    .map((fileName: string) => {
      // Read in the yaml
      const fullPath = path.join(contentDirectory, fileName)
      const contents = fs.readFileSync(fullPath, 'utf8')

      return yaml.load(contents);
  });

  // If there are multiple sections named the same, they will overwrite
  // eachother
  const reducedData = staticData.reduce((acc: any, curr: any) => ({
    ...acc,
    ...curr,
  }), {});

  return reducedData;
}
