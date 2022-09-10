import {
    LogoContainer,
     SidebarContainer,
    SidebarMenuContainer,
    StyledNavLink
} from './Sidebar.elements';

import React, { useState } from 'react';
import Icon from '../components/common/Icon';

export default function Sidebar(props) {
    var items = [
        'Dashboard',
        'Calender',
        'Chat',
        'File Manager',
        'eCommernce',
        'Emails',
        'Project',
        'Contact',
    ];

    var pages = [
        'Dashboard',
        'Calender',
        'File Manager',
        'eCommernce',
        'Emails',
        'Project',
        'Contact'
    ];
  
    const [isActive, setActive] = useState(null);

    const toggleClass = (index) => {
        setActive(index);
    };

    return (
        <SidebarContainer act={props.toggle}>
            <SidebarMenuContainer>
                <div>
                    <LogoContainer id="item" to="/">
                        <i className="bx bx-layer nav_logo-icon"> FITPEO </i>
                    </LogoContainer>

                    {items.map(function (item, index) {
                        var strClass = '';
                        if (isActive === index) {
                            console.log(index);
                            strClass = 'active';
                        } else {
                            strClass = 'Noactive';
                        }
                        return (
                            <StyledNavLink
                                to={'/' + pages[index]}
                                className={strClass}
                                key={index}
                                onClick={() => toggleClass(index)}
                            >
                                <Icon name={item}></Icon>
                                <span>{item}</span>
                            </StyledNavLink>
                        );
                    })}
                </div>
            </SidebarMenuContainer>
        </SidebarContainer>
    );
}
