import fs from 'fs';
export interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => boolean;
}
export interface SaveFileOptions {
  fileContent: string;
  destination?: string;
  fileName?: string;
  base : number;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {

  }
  execute({ fileContent, destination = 'outputs', fileName = 'table', base } : SaveFileOptions): boolean {
    fs.mkdirSync(destination, { recursive: true });
    fs.writeFileSync(`${destination}/${fileName}-${base}.txt`, fileContent);
    console.log('File created!');
    return true;
  }
}