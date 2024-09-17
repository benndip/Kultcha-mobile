import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

import {
    ViroScene,
    Viro360Image,
    ViroNode,
    ViroCamera,
    ViroText,
    ViroSphere,
    ViroMaterials,
    ViroAnimations,
    ViroAmbientLight,
    ViroSpinner
} from '@reactvision/react-viro'
import { images } from '../../../assets/images'

const ConferenceRoom = ({ sceneNavigator }) => {

    const [loading360Image, setLoading360Image] = useState(true)

    const _onLoadEnd = () => {
        setTimeout(() => {
            setLoading360Image(false)
        }, 2000);
    }

    useEffect(() => {
        _onLoadEnd()
    }, [])
    

    return (
      <ViroScene>
        <ViroAmbientLight color="#ffffff" />
        {loading360Image ? (
          <ViroSpinner type="light" position={[0, 0, -2]} />
        ) : (
          <Viro360Image source={images.drOffice} />
        )}
        {/* <ViroCamera position={[0, 0, 0]} active={true} rotation={[0, -90, 0]} /> */}
        <ViroNode position={[-1.5, -1.5, -1]} rotation={[0, 40, 0]}>
          {/* <ViroSphere
            position={[0.1, 0, -1]}
            radius={0.15}
            materials={["sphere1"]}
            animation={{ name: "spin", run: true, loop: true }}
            onHover={(isHovering, position, source) => {
                // sceneNavigator.push({ scene: CorridorTwo })
            }}
          /> */}
          {/* <ViroText
            position={[0.1, -0.7, -1]}
            text="Back To Corridor"
            style={{ fontSize: 22, color: "#f1f2f6", fontWeight: "bold" }}
          /> */}
        </ViroNode>
        {loading360Image && (
          <ViroText text="Loading Corridor..." position={[0, 0, 0]} />
        )}
      </ViroScene>
    );
}


ViroMaterials.createMaterials({
    sphere1: {
        diffuseColor: '#ccc',
        // diffuseTexture: require('../../../res/images/moon.jpeg')
    }
})

ViroAnimations.registerAnimations({
    spin: {
        properties: {
            rotateY: '+=45'
        },
        duration: 2000
    },
})

export default ConferenceRoom

