import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory-menu.styles.scss'

import { connect } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selector'
import { createStructuredSelector }  from 'reselect'

const DirectoryMenu = ({sections}) => (
            <div className="directory-menu">
                {
                    sections.map(({id,...sectionProps}) => <MenuItem key={id} {...sectionProps}/>)
                }
            </div>
        )
 
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
  }
)
export default connect(mapStateToProps)(DirectoryMenu)