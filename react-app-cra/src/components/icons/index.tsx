const ICONS = [
  {
    name: 'check',
    component: (
      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="check">
          <path id="Icon" d="M17.1673 5L8.00065 14.1667L3.83398 10" stroke="#3B7C0F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </svg>
    )
  }
];

type IconProps = {
  name: 'check';
  styles?: string;
};

export const Icon = ({ name, styles }: IconProps): JSX.Element => {
  return (
    <div className={styles}>
      {ICONS.find((icon) => icon.name === name)?.component}
    </div>
  );
};