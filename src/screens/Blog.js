import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Loading from '../components/Loading';
import axios from 'axios';
const Blog = () => {
    const [catalogs, setCatalogs] = React.useState([]);
    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [activeTab, setActiveTab] = React.useState(0);

    React.useEffect(() => {

        const fetchData = () => {
            const url = 'https://chungvd.name.vn/api/catalogs';
            try {
                axios.get(url).then(response => {
                    setCatalogs(response.data.data);
                    fetchListPost(response.data.data).then(result => {
                        if (result !== undefined) {
                            debugger;
                            setPosts(result.data.data);
                            setLoading(false);
                        }
                    });
                })
            } catch (e) {
                console.log(e);
                setLoading(false);
            } finally {
                setLoading(false);
            }

        };

        fetchData();
    }, []);

    const fetchListPost = async (catalogs) => {
        if (catalogs !== undefined) {
            try {
                let newArr = [];
                catalogs.forEach(element => {
                    const url = 'https://chungvd.name.vn/api/category/posts/' + element.id;
                    let item = axios.get(url);
                    newArr.push(item);
                });
                Promise.all(newArr)
                    .then(list => {
                        return list;
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            } catch (e) {
                console.log(e);
            }
        }
    }

    const handleTabChange = (e, newValue) => {
        setActiveTab(newValue);
    }

    return (
        <>
            {
                (loading) ?
                    <Loading />
                    :
                    <Tabs
                        aria-label="tabs" defaultValue={0} sx={{ bgcolor: 'transparent' }}
                        value={activeTab} onChange={handleTabChange}
                    >
                        <TabList
                            disableUnderline
                            sx={{
                                p: 0.5,
                                gap: 0.5,
                                borderRadius: 'xl',
                                bgcolor: 'background.level1',
                                [`& .${tabClasses.root}[aria-selected="true"]`]: {
                                    boxShadow: 'sm',
                                    bgcolor: 'background.surface',
                                },
                            }}
                        >
                            {
                                catalogs.map((item) =>
                                    <Tab disableIndicator key={item.id}>
                                        {item.name}
                                    </Tab>)
                            }
                        </TabList>
                        {
                            posts.map(
                                (item, index) =>
                                    <TabPanel value={index}>
                                        <p key={item.id}>{item.name}</p>
                                    </TabPanel>
                            )
                        }


                    </Tabs>

            }
        </>
    )
}

export default Blog;