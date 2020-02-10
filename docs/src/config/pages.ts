export interface secondLevelChild {
  pathName: string;
  label: string;
}

export interface firstLevelChild {
  pathName: string;
  subHeader: string;
  children?: secondLevelChild[];
}

export interface parentLevel {
  pathName: string;
  header: string;
  children?: firstLevelChild[];
}

export const pages: parentLevel[] = [
  {
    pathName: "/forms",
    header: "Forms",
    children: [
      {
        pathName: "/forms",
        subHeader: "Hooks",
        children: [
          {
            pathName: "/useForm",
            label: "useForm"
          }
        ]
      },
      {
        pathName: "/forms",
        subHeader: "Wrappers",
        children: [
          {
            pathName: "/formWrapper",
            label: 'Form Wrapper'
          }
        ]
      },
      {
        pathName: "/forms",
        subHeader: "Fields",
        children: [
          {
            pathName: "/textField",
            label: 'Text Field'
          }
        ]
      }
    ]
  }
];
