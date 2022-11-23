
import { Printer, Profile, Settings, Download, BldgMat, Appliance, Lumber, Electrical, Flooring, Hardware, HVAC, Kitchen, Paint, Plumbing, Tools, Supplies, Palette } from "../../icons"
import { Button, NavItem } from '../../components'
import { useContext, useState } from "react";

export function Main(props: any) {
  const [filter, setFilter] = useState('');

  const handleClick = (e: any) => {
    console.log(e);
  }
  const handleNavClick = (e: any) => {
    setFilter(e);
    console.log(e);
  }
  const handleFocus = (p: any) => {
    console.log(p);
  }
  const handleBlur = (p: any) => {
    console.log(p);
  }

  return (
    <>
        <div className="navBar">
          <NavItem
            icon={<Appliance classes=' navBar-badge icon-hover icon-dm' />}
            label='Appliances' labelClass='lg:text-base'
            subMenu={['Really long item on this line', 'Short', 'Stove']}
            onSubClick={(e) => handleNavClick(e)}
            onClick={(e) => handleClick(e)}
            onFocus={(e) => handleFocus(e)}
            onBlur={(e) => handleBlur(e)} >
          </NavItem>
          <NavItem
            icon={<BldgMat classes=' navBar-badge icon-hover icon-dm' />}
            label='Building Materials' labelClass='lg:text-base'
            subMenu={['Drywall', 'Fasteners', 'Flooring']}
            onSubClick={(e) => handleNavClick(e)}
            onClick={(e) => handleClick(e)}
            onFocus={(e) => handleFocus(e)}
            onBlur={(e) => handleBlur(e)} >
          </NavItem>
          <NavItem
            icon={<Printer classes=' navBar-badge icon-hover icon-dm' />}
            label='Doors & Windows' labelClass='lg:text-base'
            subMenu={['Closet', 'Coverings', 'Exterior']}
            onSubClick={(e) => handleNavClick(e)}
            onClick={(e) => handleClick(e)}
            onFocus={(e) => handleFocus(e)}
            onBlur={(e) => handleBlur(e)} />
          <NavItem icon={<Electrical classes=' navBar-badge icon-hover icon-dm' />} label='Electrical' labelClass='lg:text-base' onClick={(e) => handleClick(e)} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} />
          <NavItem icon={<HVAC classes=' navBar-badge icon-hover icon-dm' />} label='HVAC' labelClass='lg:text-base' onClick={(e) => handleClick(e)} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} />
          <NavItem icon={<Lumber classes=' navBar-badge icon-hover icon-dm' />} label='Lumber' labelClass='lg:text-base' onClick={(e) => handleClick(e)} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} />
          <NavItem icon={<Paint classes=' navBar-badge icon-hover icon-dm' />} label='Paint' labelClass='lg:text-base' onClick={(e) => handleClick(e)} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} />
          <NavItem icon={<Plumbing classes=' navBar-badge icon-hover icon-dm' />} label='Plumbing' labelClass='lg:text-base' onClick={(e) => handleClick(e)} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} />
          <NavItem icon={<Flooring classes=' navBar-badge icon-hover icon-dm' />} label='Flooring' labelClass='lg:text-base' onClick={(e) => handleClick(e)} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} />
          <NavItem icon={<Hardware classes=' navBar-badge icon-hover icon-dm' />} label='Hardware' labelClass='lg:text-base' onClick={(e) => handleClick(e)} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} />
          <NavItem icon={<Kitchen classes=' navBar-badge icon-hover icon-dm' />} label='Kitchen' labelClass='lg:text-base' onClick={(e) => handleClick(e)} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} />
          <NavItem icon={<Tools classes=' navBar-badge icon-hover icon-dm' />} label='Tools' labelClass='lg:text-base' onClick={(e) => handleClick(e)} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} />
          <NavItem icon={<Supplies classes=' navBar-badge icon-hover icon-dm' />} label='Supplies' labelClass='lg:text-base' onClick={(e) => handleClick(e)} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} />
          <NavItem
            icon={<Palette classes=' navBar-badge icon-hover icon-dm' />}
            label='Palette' labelClass='lg:text-base'
            subMenu={['Really long item on this line, really really long', 'Short', 'Long']}
            onSubClick={(e) => handleNavClick(e)}
            onClick={(e) => handleClick(e)}
            onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} >
          </NavItem>
        </div>
        <div className="myApp:inline-block m-2">
          <div className="flexRow">
            <Button onClick={(e) => handleClick(e)}>child</Button>
            <Button variant='contained' onClick={(e) => handleClick(e)}>child1</Button>
            <Button variant='pill' onClick={(e) => handleClick(e)}>child2</Button>
          </div>
          <div className="flexRow">
            <Button left startIcon={<Profile classes='mr-2 icon-button' />} endIcon={<Printer classes='ml-2 icon-button' />} onClick={(e) => handleClick(e)}>Profile</Button>
            <Button mid startIcon={<Settings />} onClick={(e) => handleClick(e)}>Settings</Button>
            <Button right startIcon={<Download classes=' icon-button' />} onClick={(e) => handleClick(e)}>Download</Button>
          </div>
        </div>

    </>
  );
}
