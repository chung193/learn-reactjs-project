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
            try {
                axios.get('https://chungvd.name.vn/api/catalogs').then(response => {
                    setCatalogs(response.data.data);
                    axios.get('https://chungvd.name.vn/api/category/posts/' + response.data.data[0].id).then(response => {
                        setPosts(response.data.data);
                    })
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


    const handleTabChange = (e, newValue) => {
        setActiveTab(newValue);
        axios.get('https://chungvd.name.vn/api/category/posts/' + catalogs[newValue].id).then(response => {
            setPosts(response.data.data);
        })
    }

    return (
        <>
            {
                loading ?
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

                            catalogs.map((item, index) =>
                                <TabPanel value={index} key={'catalog-' + item.id}>
                                    {posts.map(element => <li key={element.id}>{element.name}</li>)}
                                </TabPanel>)
                        }


                    </Tabs>

            }
        </>
    )
}

export default Blog;