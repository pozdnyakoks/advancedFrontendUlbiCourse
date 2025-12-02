import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ThemeSwitcher";
import { LangSwitcher } from "shared/LangSwitcher";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button type="button" onClick={onToggle}>
        toggle
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher className="dscsdf" />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
}
