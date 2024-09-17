import React, { useEffect, useState } from 'react'
import { ViroVRSceneNavigator } from '@reactvision/react-viro'

import FirstScene from './Scenes/FirstScene';

// import { FocusAwareStatusBar } from '../../components';
import { SafeAreaView, Text, View } from 'react-native';

const CulturalSiteVr = () => {

    const [showScene, setShowScene] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowScene(true)
        }, 3000);

    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
        {/* <FocusAwareStatusBar translucent backgroundColor='transparent'/> */}
            {
                showScene
                &&
                <ViroVRSceneNavigator
                    initialScene={{
                        scene: FirstScene
                    }}
                    vrModeEnabled={true}
                />
            }
        </SafeAreaView>
    )
}

export default CulturalSiteVr