import {View, Dimensions, Image, Text, ScrollView} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import {
  ViroAmbientLight,
  Viro3DObject,
  ViroAnimations,
  ViroLightingEnvironment,
  ViroMaterials,
  ViroARSceneNavigator,
  ViroARScene,
  ViroSpinner,
  ViroOmniLight,
  ViroText,
  ViroImage,
  ViroARPlaneSelector,
  ViroBox,
  ViroARPlane,
  ViroNode,
} from '@reactvision/react-viro';
import styles from './CulturalSiteAr.style';
import Entypo from '@expo/vector-icons/Entypo';
import Modal from "react-native-modal";
import { images } from '../../assets/images';

const {width, height} = Dimensions.get('screen');

const CulturalSiteAr = ({ route }) => {
  const threeDModal = route.params.item

  console.log(threeDModal);
  
  const [showingScene, setShowingScene] = useState(false);

  useEffect(() => {
    setShowingScene(true);
    return () => {
      setShowingScene(true);
    };
  }, []);

  const Scene = () => {
    const [showMaterial, setShowMaterial] = useState(false);
    const [loadingModel, setLoadingModel] = useState(true);
    const [rotation, setRotation] = useState([0, 0, 0]);
    const [scale, setScale] = useState([0.3,0.3,0.3]);

    const vrRef = useRef(null);

    const onPinch = (pinchState, scaleFactor, source) => {
      var newScale = scale.map(x => {
        return x * scaleFactor;
      });
      if (pinchState == 3) {
        setScale(newScale);
        return;
      }
      vrRef?.current.setNativeProps({scale: newScale});
    };

    const onDrag = (dragToPos, source) => {
      console.log('Drag', dragToPos, source);
    }

    useEffect(() => {
      // if (materialsAvailable) {
      //     ViroMaterials.createMaterials({
      //         material: material,
      //     });
      //     setShowMaterial(true);
      // }
    }, []);

    useEffect(() => {}, [loadingModel]);

    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" />
        {loadingModel && <ViroSpinner type="light" position={[0, 0, -2]} />}

        <ViroNode
          position={[0, 0, -1]}
          dragType="FixedToWorld"
        >
          <Viro3DObject
            ref={vrRef}
            source={threeDModal}
            position={[0, 0, 0]}
            scale={scale}
            type='GLB'
            onDrag={onDrag}
            onPinch={onPinch}
            onLoadStart={() => {
              setLoadingModel(true);
            }}
            onLoadEnd={() => {
              setLoadingModel(false);
            }}
            onRotate={(rotateState, rotationFactor, source) => {
              if (rotateState == 3) {
                setRotation([rotation[0], rotation[1] + rotationFactor, rotation[2]])
                return;
              }
              vrRef?.current.setNativeProps({rotation:[rotation[0], rotation[1] + rotationFactor, rotation[2]]});   
            }}
          />
        </ViroNode>
      </ViroARScene>
    );
  };

  useEffect(() => {
    setShowingScene(true);
    return () => {
      setShowingScene(true);
    };
  }, []);

  return (
    <View style={{height: height, width: '100%'}}>
        {<ViroARSceneNavigator initialScene={{scene: Scene}} />}
    </View>
  );
};

ViroAnimations.registerAnimations({
  spin: {
    properties: {
      rotateY: '+=45',
    },
    duration: 1800,
  },
});

export default CulturalSiteAr;