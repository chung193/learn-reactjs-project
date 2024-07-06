import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Loading from '../components/Loading';
const Blog = () => {
    const [catalogs, setCatalogs] = React.useState([]);
    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [postLoading, setPostLoading] = React.useState(true);
    const [activeTab, setActiveTab] = React.useState(0);

    React.useEffect(() => {
        const fetchData = async () => {
            const url = 'https://chungvd.name.vn/api/catalogs';

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCatalogs(data.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const fetchPost = async (id) => {
        const url = 'https://chungvd.name.vn/api/category/posts/' + id;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            setPosts(data.data[0].posts);
            setPostLoading(false);
        } catch (error) {
            console.log(error);
        } finally {
            setPostLoading(false);
        }
    }

    const handleTabChange = (e, newValue) => {
        setActiveTab(newValue);
        fetchPost(catalogs[newValue].id);

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
                                    <Tab
                                        disableIndicator key={item.id}>{item.name}</Tab>
                                )
                            }
                        </TabList>
                        <TabPanel value={activeTab}>
                            {
                                postLoading ?
                                    <Loading />
                                    :
                                    (
                                        posts != undefined ? posts.map(item => <p key={item.id}>{item.name}</p>)
                                            : <><p>undefined</p></>

                                    )
                            }
                        </TabPanel>

                    </Tabs>

            }
        </>
    )
}

export default Blog;