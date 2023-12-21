import type { Asset, Entry, EntryFields } from 'contentful';

export interface TypeProjectFields {
  name: EntryFields.Symbol;
  projectHighlight: Asset;
  projectImages: Asset[];
  techStack: EntryFields.Symbol[];
  description: EntryFields.Text;
  projectUrl: EntryFields.Symbol;
  repositoryUrl?: EntryFields.Symbol;
}
