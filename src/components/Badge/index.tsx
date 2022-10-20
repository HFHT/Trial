import { useEffect } from "react";

interface IBadge {
  icon: JSX.Element;
  label?: string;
  color?: string;
  content?: string;
}

const defaultState = {
  account: {},
  photo: ''
}

export default function Badge(badgeProps: IBadge) {

  return (
    <div className="badge flex items-baseline">
      <svg width="32px" height="32px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="badge-icon">
        {badgeProps.icon}
      </svg>
        <span className="badge-label">{badgeProps.label}</span>
        <span className="badge-content">{badgeProps.content}</span>

    </div>
  )
}