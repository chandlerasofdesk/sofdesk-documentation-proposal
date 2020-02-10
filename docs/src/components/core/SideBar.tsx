import React, { Fragment, useState } from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import { without } from "lodash";
import {
  firstLevelChild,
  pages,
  parentLevel,
  secondLevelChild
} from "../../config/pages";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles
} from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { sideBarActive } from "../../store/core/selectors.core";
import { setSidebarActive } from "../../store/core/actions.core";
import Link from "../../materialUi/Link";
import { useRouter } from "next/router";
import { Collapse } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(3),
      ...theme.mixins.toolbar
    },
    drawerPaper: {
      width: drawerWidth
    }
  })
);

function SideBar() {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();

  const [collapsedItems, setCollapsedItems] = useState([]);

  const sidebarActive = useSelector(sideBarActive);
  const dispatch = useDispatch();

  const handleClick = (name: string): void => {
    if (!collapsedItems.includes(name)) {
      setCollapsedItems([...collapsedItems, name]);
    } else {
      setCollapsedItems(without(collapsedItems, name));
    }
  };

  const drawer = (
    <Fragment>
      <div className={classes.drawerHeader}>
        <Link variant="subtitle1" href={"/"}>
          Sofdesk Documentation
        </Link>
      </div>
      <List>
        {pages.map((parent: parentLevel) => {
          return (
            <Fragment>
              <ListItem button onClick={() => handleClick(parent.header)}>
                <ListItemText primary={parent.header} />
                {collapsedItems.includes(parent.header) ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )}
              </ListItem>
              <Collapse in={collapsedItems.includes(parent.header)}>
                <List>
                  {parent.children.map((child: firstLevelChild) => {
                    return (
                      <Fragment>
                        <ListItem
                          button
                          onClick={() => handleClick(child.subHeader)}
                        >
                          <ListItemText
                            style={{ padding: "0 1rem", fontWeight: 700 }}
                            primary={child.subHeader}
                          />
                          {collapsedItems.includes(child.subHeader) ? (
                            <ExpandLess />
                          ) : (
                            <ExpandMore />
                          )}
                        </ListItem>
                        <Collapse in={collapsedItems.includes(child.subHeader)}>
                          <List>
                            {child.children.map(
                              (secondLevelChild: secondLevelChild) => {
                                return (
                                  <ListItem
                                    button
                                    component={Link}
                                    href={
                                      child.pathName + secondLevelChild.pathName
                                    }
                                  >
                                    <ListItemText
                                      style={{
                                        padding: "0 2rem",
                                        fontSize: "12px"
                                      }}
                                      primary={secondLevelChild.label}
                                    />
                                  </ListItem>
                                );
                              }
                            )}
                          </List>
                        </Collapse>
                      </Fragment>
                    );
                  })}
                </List>
              </Collapse>
            </Fragment>
          );
        })}
      </List>
    </Fragment>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={sidebarActive}
          onClose={() => dispatch(setSidebarActive(!sidebarActive))}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default SideBar;
{
  /*
              <Collapse in={true}>
                <List>
                  {parent.children.map((child: firstLevelChild) => {
                    return (
                      <ListItem button>
                        <ListItemText primary={child.subHeader} />
                        <Collapse in={true}>
                          <List>
                            {child.children.map(
                              (secondLevelChild: secondLevelChild) => {
                                return (
                                  <ListItem button>
                                    <ListItemText
                                      primary={secondLevelChild.label}
                                    />
                                  </ListItem>
                                );
                              }
                            )}
                          </List>
                        </Collapse>
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
*/
}
