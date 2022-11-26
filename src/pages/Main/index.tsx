
import { Printer, Profile, Settings, Download, BldgMat, Appliance, Lumber, Electrical, Flooring, Hardware, HVAC, Kitchen, Paint, Plumbing, Tools, Supplies, Palett, Door, Assemblies } from "../../icons"
import { Button, Card, NavItem } from '../../components'
import { useContext, useState, useEffect } from "react";
import { Item } from "../Item.tsx";

export function Main(props: any) {
  const [filter, setFilter] = useState('');

  const handleClick = (e: any) => {
    //console.log(e);
  }
  const handleNavClick = (e: any) => {
    setFilter(e);
    console.log(e);
  }

  return (
    <>
      <div className="navBar">
        <NavItem
          icon={<Appliance classes=' navBar-badge icon-hover icon-dm' />}
          label='Appliances' labelClass='lg:text-base'
          subMenu={['Really long item on this line', 'Short', 'Stove']}
          onSubClick={(e) => handleNavClick(e)}
        >
        </NavItem>
        <NavItem
          icon={<BldgMat classes=' navBar-badge icon-hover icon-dm' />}
          label='Building Materials' labelClass='lg:text-base'
          subMenu={['Drywall', 'Fasteners', 'Flooring']}
          onSubClick={(e) => handleNavClick(e)}
        >
        </NavItem>
        <NavItem
          icon={<Door classes=' navBar-badge icon-hover icon-dm' />}
          label='Doors & Windows' labelClass='lg:text-base'
          subMenu={['Closet', 'Coverings', 'Exterior']}
          onSubClick={(e) => handleNavClick(e)}
        />
        <NavItem
          icon={<Electrical classes=' navBar-badge icon-hover icon-dm' />}
          label='Electrical' labelClass='lg:text-base'
          onSubClick={(e) => handleNavClick(e)}
          subMenu={['Closet', 'Coverings', 'Exterior']}
        />
        <NavItem
          icon={<HVAC classes=' navBar-badge icon-hover icon-dm' />}
          label='HVAC' labelClass='lg:text-base'
          onSubClick={(e) => handleNavClick(e)}
          subMenu={['Closet', 'Coverings', 'Exterior']}
        />
        <NavItem
          icon={<Lumber classes=' navBar-badge icon-hover icon-dm' />}
          label='Lumber' labelClass='lg:text-base'
          onSubClick={(e) => handleNavClick(e)}
          subMenu={['Closet', 'Coverings', 'Exterior']}
        />
        <NavItem
          icon={<Paint classes=' navBar-badge icon-hover icon-dm' />}
          label='Paint' labelClass='lg:text-base'
          onSubClick={(e) => handleNavClick(e)}
          subMenu={['Closet', 'Coverings', 'Exterior']}
        />
        <NavItem
          icon={<Plumbing classes=' navBar-badge icon-hover icon-dm' />}
          label='Plumbing' labelClass='lg:text-base'
          onSubClick={(e) => handleNavClick(e)}
          subMenu={['Closet', 'Coverings', 'Exterior']}
        />
        <NavItem
          icon={<Flooring classes=' navBar-badge icon-hover icon-dm' />}
          label='Flooring' labelClass='lg:text-base'
          onSubClick={(e) => handleNavClick(e)}
          subMenu={['Closet', 'Coverings', 'Exterior']}
        />
        <NavItem
          icon={<Hardware classes=' navBar-badge icon-hover icon-dm' />}
          label='Hardware' labelClass='lg:text-base'
          onSubClick={(e) => handleNavClick(e)}
          subMenu={['Closet', 'Coverings', 'Exterior']}
        />
        <NavItem
          icon={<Kitchen classes=' navBar-badge icon-hover icon-dm' />}
          label='Kitchen' labelClass='lg:text-base'
          onSubClick={(e) => handleNavClick(e)}
          subMenu={['Closet', 'Coverings', 'Exterior']}
        />
        <NavItem
          icon={<Assemblies classes=' navBar-badge icon-hover icon-dm' />}
          label='Modules' labelClass='lg:text-base'
          onSubClick={(e) => handleNavClick(e)}
          subMenu={['Exterior Door', 'Window Section', '4x8 Wall']}
        />        
        <NavItem
          icon={<Tools classes=' navBar-badge icon-hover icon-dm' />}
          label='Tools' labelClass='lg:text-base'
          onSubClick={(e) => handleNavClick(e)}
          subMenu={['Closet', 'Coverings', 'Exterior']}
        />
        <NavItem
          icon={<Supplies classes=' navBar-badge icon-hover icon-dm' />}
          label='Supplies' labelClass='lg:text-base'
          onSubClick={(e) => handleNavClick(e)}
          subMenu={['Closet', 'Coverings', 'Exterior']}
        />
        <NavItem
          icon={<Palett classes=' navBar-badge icon-hover icon-dm' />}
          label='Palett' labelClass='lg:text-base'
          subMenu={['Really long item on this line, really really long', 'Short', 'Long']}
          onSubClick={(e) => handleNavClick(e)}
        >
        </NavItem>
      </div>
      <div className="myApp:inline-block m-2 overflow-y-auto w-[98%]">
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
        <div className="mr-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 myApp:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 ws:grid-cols-7 4k:grid-cols-10">
          <Card img="https://images.thdstatic.com/productImages/eb67cc0f-990b-4c67-8719-9b96e27df582/svn/framing-studs-058448-64_400.jpg" />
          <Card img="https://images.thdstatic.com/productImages/eb67cc0f-990b-4c67-8719-9b96e27df582/svn/framing-studs-058448-64_400.jp" />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card img="https://images.thdstatic.com/productImages/eb67cc0f-990b-4c67-8719-9b96e27df582/svn/framing-studs-058448-64_400.jp" />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card select={true} />
          <Item />
        </div>
      </div>
    </>
  );
}
