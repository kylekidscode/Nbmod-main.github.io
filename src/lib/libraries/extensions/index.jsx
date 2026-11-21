/* eslint-disable max-len */
/* Just a bunch of those lol */
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {APP_NAME} from '../../brand';
///////////////
import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import animatedTextIconURL from './penguinmod/extensions/text extension.png';
import animatedTextInsetIconURL from './penguinmod/extensions/text extension small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import faceSensingIconURL from './faceSensing/thumb.png';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

// turbowarp, penguinmod & gallery icons
import twIcon from './tw/tw.svg';
import rubyIcon from './snail-ide/ruby.png';
import galleryIcon from './gallery/gallery.svg';
import turbowarpIcon from './penguinmod/extensions/turbowarp_icon.svg';
import gaiamodIcon from './gaiamod/gaiamod_icon.png';
import magicmodIcon from './gaiamod/magicmod_icon.png';
import nitroboltIcon from './gaiamod/nitrobolt_icon.svg';
import acidmodIcon from './gaiamod/acidmod_icon.svg';
import bilupIcon from './gaiamod/bilup_icon.svg';
import penguinmodIcon from './gaiamod/penguinmod_icon.png';
import arkideIcon from './arkide/arkide_icon.png';
import dinosaurmodIcon from './dinosaurmod/dinosaurmod_icon.png';
import snailideIcon from './snail-ide/snailide_icon.png';
import electramodIcon from './electramod/electramod_icon.png';
import astraeditorIcon from './gaiamod/astraeditor_icon.svg';
import zeroTwoEngineIcon from './gaiamod/zerotwoengine_icon.png';
import mistwarpIcon from './mistium/mistwarp_icon.svg';
import dashblocksIcon from './dashblocks/dashblocks_icon.png';
import ccwIcon from './gandi-ide/gandiidelogo.png';
import penguinmodLibraryExtensionIcon from './penguinmod/library.svg';
import sharkpoolGalleryIcon from './penguinmod/sharkpool-library.svg';
import tutelmodLibraryExtensionIcon from './tutelmod/library.png';

import ExtForgeIcon from './penguinmod/extforge.svg';

import DiscordIcon from './discord/icon.svg';
import DiscordRPCIcon from './discord/rpc.png';

import filesExtensionIcon from './penguinmod/extensions/files.svg';
import jgTailgatingExtensionIcon from './penguinmod/extensions/tailgating.png';
import jgRuntimeExtensionIcon from './penguinmod/extensions/runtime.svg';
import jgPrismExtensionIcon from './penguinmod/extensions/prism.png';
import jgDebuggingIcon from './penguinmod/extensions/debugging.svg';

import jwProtoExtensionIcon from './penguinmod/extensions/proto.svg';
import jwUniteExtensionIcon from './penguinmod/extensions/Unite.png';

import jwStructsExtensionIcon from './penguinmod/extensions/ooplogo.png';

import jwArrayExtensionThumb from './penguinmod/extensions/jwArray.svg';
import jwTargetsExtensionThumb from './penguinmod/extensions/jwTargets.svg';
import jwNumExtensionThumb from './penguinmod/extensions/jwNum.svg';
import jwColorExtensionThumb from './penguinmod/extensions/jwColor.svg';
import jwVectorExtensionThumb from './penguinmod/extensions/jwVector.svg';
import jwLambdaExtensionThumb from './penguinmod/extensions/jwLambda.svg';
import jwScopeExtensionThumb from './penguinmod/extensions/jwScope.svg';
import jwXMLExtensionIcon from './penguinmod/extensions/jwXML.svg';
import jwPointerExtensionThumb from './penguinmod/extensions/jwPointer.svg';
import jwIntExtensionThumb from './penguinmod/extensions/jwInt.svg';

import iygPerlinNoiseExtensionIcon from './penguinmod/extensions/perlinnoisebanner.png';

// thank yo godslayerakp for makin pmCamera :good:
import pmCameraExtensionIcon from './penguinmod/extensions/pmcamera_thumbnail.png';

// cl waw
// import cloudlinkThumb from './penguinmod/extensions/cloudlinkThumb.png';
import cloudlinkIcon from './penguinmod/extensions/cloudlinkIcon.svg';
import clfiveIcon from './cloudlink/cl5.svg';
import clomegaIcon from './cloudlink/clomega.svg';

// thx jeremey
import canvasExtensionBanner from './penguinmod/extensions/CanvasExtensionMenu.png';
import canvasExtensionIcon from './penguinmod/extensions/CanvasSmall.png';

// griffpatch stuff that hopefully we can keep pls plsplspl !!S!
import griffpatchPhysicsThumb from './penguinmod/extensions/griffpatch_physics.png';
import griffpatchPhysicsIcon from './penguinmod/extensions/griffpatch_physicsIcon.svg';

import gp from './penguinmod/extensions/gamepad.svg';
import clippingblending from './penguinmod/extensions/clippingblending.svg';

import pointerlockThumb from './penguinmod/extensions/pointerlock.png';
import cursorThumb from './penguinmod/extensions/cursor.svg';

// LilyMakesThings 
import lilyTempVariablesExtensionIcon from './penguinmod/orgtw/TempVariables2.svg';

// more icons so they arent just red when the extension color is not red
import gsaTempVariablesExtensionIcon from './penguinmod/extensions/tempvariables.svg';
import jgIframeExtensionIcon from './penguinmod/extensions/iframe.png';
import jgExtendedAudioExtensionIcon from './penguinmod/extensions/extendedaudio.png';
import jgScratchAuthExtensionIcon from './penguinmod/extensions/scratchauth2.svg';
import jgPermissionExtensionIcon from './penguinmod/extensions/permissions.png';
import jgCloneManagerExtensionIcon from './penguinmod/extensions/clonemanager.png';
import pmInlineBlocksExtensionIcon from './penguinmod/extensions/inlineblocks.png';
import jgPackagerApplicationsExtensionIcon from './penguinmod/extensions/packagedApplications.png';
import jgPackagerApplicationsInsetExtensionIcon from './penguinmod/extensions/packagedApplications_inset.png';
import spJSONExtensionIcon from './penguinmod/extensions/sp_json.svg';

// import jgTweeningExtensionIcon from './penguinmod/extensions/tween.png';
import jgsilvxrcatInterfacesExtensionIcon from './penguinmod/extensions/interfaces2.png';

// 3D MAN WTF
import jg3dExtensionIcon from './penguinmod/extensions/3d.png';
import jg3dInsetExtensionIcon from './penguinmod/extensions/3dicon.png';
import jg3dVrExtensionIcon from './penguinmod/extensions/3dVr.png';
import jg3dVrInsetExtensionIcon from './penguinmod/extensions/3dVr_Inset.png';
import fr3dPhysicsExtensionIcon from './penguinmod/extensions/3d_physics.png';
import fr3dPhysicsInsetExtensionIcon from './penguinmod/extensions/3d_physics_icon_sized.png';

// virtal realty
import jgVrExtensionIcon from './penguinmod/extensions/vr_extension.png';

import theshovelCustomStylesIcon from './penguinmod/orgtw/CustomStyles.svg';
import theshovelCanvasEffectsIcon from './penguinmod/extensions/canvas_effects.svg';
import theshovelLzCompressIcon from './penguinmod/orgtw/lz-compress2.svg';
import theshovelColorPickerIcon from './penguinmod/orgtw/ColorPicker.svg';

// sharkpool
import sharkpoolPrintingIcon from './penguinmod/extensions/printing.svg';
import sharkpoolTuneIcon from './penguinmod/extensions/tuneShark.svg';
import sharkpoolMBPIcon from './penguinmod/extensions/myBlocksPlus.svg';
import sharkpoolBCIcon from './penguinmod/extensions/BetterComments.svg';
import sharkpoolPEIcon from './penguinmod/extensions/particleEngine.svg';
import jgScriptsExtensionIcon from './penguinmod/extensions/scripts.svg';
import sharkpoolLooksExpandedIcon from './penguinmod/extensions/looksExpanded.svg';
import spTurboSkinsIcon from './penguinmod/extensions/turboSkins.svg';
import spFontManagerIcon from './penguinmod/extensions/fontManager.svg';
import spSoundWaveIcon from './penguinmod/extensions/soundWaves.svg';
import spTempVarsIcon from './penguinmod/extensions/sp_tempVars.svg';

// events
import jgStorageExtensionIcon from './penguinmod/extensions/storage.png';
import jgTimersExtensionIcon from './penguinmod/extensions/multipletimers.png';
import jgAdvancedTextExtensionIcon from './penguinmod/extensions/advancedtext.png';

import jgJavascriptExtensionIcon from './penguinmod/extensions/javascript.png';
import jgPathfindingExtensionIcon from './penguinmod/extensions/pathfinding.png';
import jgAnimationExtensionIcon from './penguinmod/extensions/animation.png';

// category expansions
import pmMotionExpansionExtensionIcon from './penguinmod/extensions/motion_expanded.png';
import pmEventsExpansionExtensionIcon from './penguinmod/extensions/events_expanded.png';
import pmControlsExpansionExtensionIcon from './penguinmod/extensions/controls_expanded.png';
import pmSensingExpansionExtensionIcon from './penguinmod/extensions/sensing_expanded.png';
import pmOperatorsExpansionExtensionIcon from './penguinmod/extensions/operators_expanded.png';

// default icon if one is not made yet...
import defaultExtensionIcon from './penguinmod/extensions/placeholder.png';


// um...
import turboBuilderIcon from './gaiamod/turbobuilder.png';
import turboBuilderDevIcon from './gaiamod/turbobuilder-dev.png';
import silvxrcatOddMessagesExtensionIcon from './penguinmod/extensions/oddmessages.svg';

// dinosaurmod
import luaIcon from './dinosaurmod/lua.png';
import pythonIcon from './dinosaurmod/python.png';

//snail-ide
import randomlyBlocksIcon from './randomly/randomlyBlocks.svg';
import typescriptIcon from './snail-ide/typescript.svg';

//champierre
import chatgpt2scratchIconURL from './chatgpt2scratch/chatgpt2scratch.png';
import chatgpt2scratchInsetIconURL from './chatgpt2scratch/chatgpt2scratch-small.png';
import facemesh2scratchIconURL from './facemesh2scratch/facemesh2scratch.png';
import facemesh2scratchInsetIconURL from './facemesh2scratch/facemesh2scratch-small.png';
import scratch2webserialapiIconURL from './scratch2webserialapi/scratch2webserialapi.png';
import scratch2webserialapiInsetIconURL from './scratch2webserialapi/scratch2webserialapi-small.png';
import handpose2scratchIconURL from './handpose2scratch/handpose2scratch.png';
import handpose2scratchInsetIconURL from './handpose2scratch/handpose2scratch-small.png';
import ic2scratchIconURL from './ic2scratch/ic2scratch.png';
import ic2scratchInsetIconURL from './ic2scratch/ic2scratch-small.png';
import posenet2scratchIconURL from './posenet2scratch/posenet2scratch.png';
import posenet2scratchInsetIconURL from './posenet2scratch/posenet2scratch-small.png';
import ml2scratchIconURL from './ml2scratch/ml2scratch.png';
import ml2scratchInsetIconURL from './ml2scratch/ml2scratch-small.png';
import tm2scratchIconURL from './tm2scratch/tm2scratch.png';
import tm2scratchInsetIconURL from './tm2scratch/tm2scratch-small.png';
import tmpose2scratchIconURL from './tmpose2scratch/tmpose2scratch.png';
import tmpose2scratchInsetIconURL from './tmpose2scratch/tmpose2scratch-small.png';

//um
import ohbotIconURL from './ohbot/ohbot.png';
import ohbotInsetIconURL from './ohbot/ohbot-small.svg';
import webmidiIconURL from './webmidi/webmidi.png';
import webmidiInsetIconURL from './webmidi/webmidi-small.png';
import newBlockImage from './newblocks/newblocks.png';
import newBlockButtonImage from './newblocks/newblocks-small.png';
import newMicrobitImage from './newmicrobit/newmicrobit.png';
import newMicrobitButtonImage from './newmicrobit/newmicrobit-small.png';
import ExtensionInsetIconURL from './ellabsextension/extension-icon.png';
import ExtensionIconURL from './ellabsextension/extension-background.png';
import maikaIconURL from './olliMaika/maika.png';
import maikaforInsetIconURL from './olliMaika/maika-small.png';

import playgoIconURL from './playgo/playgo.png';
import playgoInsetIconURL from './playgo/playgo-small.svg';
import playgoConnectionIconURL from './wedo2/wedo-illustration.svg';
import playgoConnectionSmallIconURL from './wedo2/wedo-small.svg';
import playgoConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import playIoTIconURL from './playiot/playiot.png';
import playIoTInsetIconURL from './playiot/playiot-small.svg';
import playIoTConnectionIconURL from './wedo2/wedo-illustration.svg';
import playIoTConnectionSmallIconURL from './wedo2/wedo-small.svg';
import playIoTConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import playMeIconURL from './playme/playme.png';
import playMeInsetIconURL from './playme/playme-small.svg';
import playMeConnectionIconURL from './wedo2/wedo-illustration.svg';
import playMeConnectionSmallIconURL from './wedo2/wedo-small.svg';
import playMeConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

//junilab
import jdcodeIconURL from './jdcode/jdcode.png';
import jdcodeInsetIconURL from './jdcode/jdcode-small.png';
import jdcodeConnectionIconURL from './jdcode/jdcode-illustration.png';
import jdcodeConnectionSmallIconURL from './jdcode/jdcode-small.png';
import robodogIconURL from './robodog/robodog.png';
import robodogInsetIconURL from './robodog/robodog-small.png';
import robodogConnectionIconURL from './robodog/robodog-illustration.png';
import robodogConnectionSmallIconURL from './robodog/robodog-small.png';
import jcboardIconURL from './jcboard/jcboard.png';
import jcboardInsetIconURL from './jcboard/jcboard-small.png';
import jcboardConnectionIconURL from './jcboard/jcboard-illustration.png';
import jcboardConnectionSmallIconURL from './jcboard/jcboard-small.png';
import uglybotIconURL from './uglybot/uglybot.png';
import uglybotInsetIconURL from './uglybot/uglybot-small.png';
import uglybotConnectionIconURL from './uglybot/uglybot-illustration.png';
import uglybotConnectionSmallIconURL from './uglybot/uglybot-small.png';
import firmtechIconURL from './firmtech/firmtech.png';
import firmtechInsetIconURL from './firmtech/firmtech-small.png';
import firmtechConnectionIconURL from './firmtech/firmtech-illustration.png';
import firmtechConnectionSmallIconURL from './firmtech/firmtech-small.png';
import aidroneIconURL from './aidrone/aidrone.png';
import aidroneInsetIconURL from './aidrone/aidrone-small.png';
import aidroneConnectionIconURL from './aidrone/aidrone-illustration.png';
import aidroneConnectionSmallIconURL from './aidrone/aidrone-small.png';
import aicobotIconURL from './aicobot/aicobot.png';
import aicobotInsetIconURL from './aicobot/aicobot-small.png';
import aicobotConnectionIconURL from './aicobot/aicobot-illustration.png';
import aicobotConnectionSmallIconURL from './aicobot/aicobot-small.png';

//AkariGroup
import akariBlocksImage from './akariBlocks/logo320.jpg';
import akariBlocksButtonImage from './akariBlocks/logo320_ex.jpg';
import akariCameraImage from './akariCamera/logo320.jpg';
import akariCameraButtonImage from './akariCamera/logo320_ex.jpg';
import akariBlocksSimpleImage from './akariBlocksSimple/logo320.jpg';
import akariBlocksSimpleButtonImage from './akariBlocksSimple/logo320_ex.jpg';
import akariCameraSimpleImage from './akariCameraSimple/logo320.jpg';
import akariCameraSimpleButtonImage from './akariCameraSimple/logo320_ex.jpg';

//other
import appMakerIconURL from './librekitten/appmaker/appmaker.svg';
import appMakerInsetIconURL from './librekitten/appmaker/software-small.svg';
import mbotIconURL from './mbot/mbot-header.png';
import mbotInsetIconURL from './mbot/mbot.svg';
import roku from './roku/big.jpg';
import rokuSmall from './roku/small.png';
import axerAIIconURL from './other/AxerAI.svg';
import axerAIInsetIconURL from './other/InsetAxerAI.png';
import nftIconURL from './nft/nft.png';
import nftInsetIconURL from './nft/nft-small.svg';
import toonco1ImageURL from './webKit/webKit.png';
import toonco1ImageSmallURL from './webKit/webKit-small.png';
import bodyblocksIconURL from './bodyblocks/background.png';
import bodyblocksInsetIconURL from './bodyblocks/inset-small.svg';
import PictoBloxMathIconURL from './PictoBloxMath/PictoBloxMath.png';
import PictoBloxMathInsetIconURL from './PictoBloxMath/PictoBloxMath-small.svg';
import PictoBloxStringIconURL from './PictoBloxString/PictoBloxString.png';
import PictoBloxStringInsetIconURL from './PictoBloxString/PictoBloxString-small.svg';

//GvbvdxxMod2
import NESEmuThumb from './nes_emulator/nes.svg';
import NESInsetIcon from './nes_emulator/nes-small.svg';
import gm2HTML5Small from './html5/small.svg';
import gm2HTML5Large from './html5/large.svg';
import sndanalyserBig from './sound_analyser/big.svg';
import jsDialogsBigIcon from './dialog/dialogs.png';
import jsDialogsSmallIcon from './dialog/small.png';
import speech4pcDialogsBigIcon from './speech4pc/speech.png';
import speech4pcDialogsSmallIcon from './speech4pc/small.png';
import websitesBigIcon from './websites/websites.png';
import websitesSmallIcon from './websites/small.png';
import scratchBigIcon from './control/scratch.png';
import scratchSmallIcon from './control/small.png';
import wssmall from './websockets/small.png';
import wsbig from './websockets/big.png';
import audioctxsmall from './audio_context/small.png';
import audioctxbig from './audio_context/big.png';
import userdatasmall from './userdata/small.png';
import userdatabig from './userdata/big.png';
import beepboxsmall from './beepbox_synth/small.png';
import beepboxbig from './beepbox_synth/big.png';
import betteraudioBigIcon from './better_audio/big.png';
import betteraudioSmallIcon from './better_audio/small.png';


//by yj
import battleImage from './gitblock/battle.png';
import battleInsetImage from './gitblock/battle-small.svg';
import puzzleImage from './gitblock/puzzle.png';
import puzzleInsetImage from './gitblock/puzzle-small.svg';
import communityImage from './gitblock/community.png';
import communityInsetImage from './gitblock/community-small.svg';
import kinectImage from './gitblock/kinect.png';
import kinectInsetImage from './gitblock/kinect-small.svg';
import canvasIconURL from './gitblock/canvas.png';
import canvasInsetIconURL from './gitblock/canvas-small.svg';
import lazyAudioIconURL from './gitblock/lazy-audio.png';
import lazyAudioInsetIconURL from './gitblock/lazy-audio-small.svg';
import jsInsetIconURL from './gitblock/js-small.svg';

// ESP32
import esp32SerialIconURL from './zumiAI/zumiAI.png';
import esp32SerialInsetIconURL from './zumiAI/zumiAI-small.svg';
import esp32SerialConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import esp32SerialConnectionSmallIconURL from './zumiAI/zumiAI-small.svg';

// ESP32
import esp32BluetoothIconURL from './zumiAI/zumiAI.png';
import esp32BluetoothInsetIconURL from './zumiAI/zumiAI_bluetooth-small.svg';
import esp32BluetoothConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import esp32BluetoothConnectionSmallIconURL from './zumiAI/zumiAI_bluetooth-small.svg'; //

//166iwase-lgtm/taichan0123
import meshImage from './mesh/mesh.png';
import ledButtonImage from './led/led-small.png';
import brightnessButtonImage from './brightness/brightness-small.png';
import motionButtonImage from './motion/motion-small.png';
import gpioButtonImage from './gpio/gpio-small.png';

//garragames
import koriIconURL from './kori/kori.png';
import koriInsetIconURL from './kori/kori-small.svg';
import koriConnectionIconURL from './kori/kori-illustration.svg';
import koriConnectionSmallIconURL from './kori/kori-small.svg';

// onegpio
import onegpioArduinoImage from './onegpioArduino/onegpioArduino.png';
import onegpioArduinoInsetIconURL from './onegpioArduino/onegpioArduino-small.png';
import onegpioRpiImage from './onegpioRpi/onegpioRpi.png';
import onegpioRpiInsetIconURL from './onegpioRpi/onegpioRpi-small.png';
import onegpioEspImage from './onegpioEsp/onegpioEsp.png';
import onegpioEspInsetIconURL from './onegpioEsp/onegpioEsp-small.png';
import onegpioPicoboardImage from './onegpioPicoboard/onegpioPicoboard.jpg';
import onegpioPicoboardInsetIconURL from './onegpioPicoboard/onegpioPicoboard-small.png';
import onegpioCpxImage from './onegpioCpx/onegpioCpx.jpg';
import onegpioCpxInsetIconURL from './onegpioCpx/onegpioCpx-small.png';
import onegpioRoboHATImage from './onegpioRoboHAT/onegpioRoboHAT.png';
import onegpioRoboHATInsetIconURL from './onegpioRoboHAT/onegpioRoboHAT-small.png';
import onegpioRpiPicoImage from './onegpioRpiPico/onegpioRpiPico.png';
import onegpioRpiPicoInsetIconURL from './onegpioRpiPico/onegpioRpiPico-small.png';

//neublamod
import unknownsmallicon from './Neublamod/Placeholder-small.svg';
import unknownthumbnail from '.Neublamod/placeholderpm.svg';
import AlmejaExtensionGalleryicon from './Extensionsandthumbnails/alejo14ext.svg';
import Andreitom1ExtensionCollectionicon from './Extensionsandthumbnails/Andreitom1sExtensionCollection.png';
import Pooiod7extgalleryicon from './Extensionsandthumbnails/P7ExtGalleryCover.png';
import Unknownextgalleryicon from './Neublamod/Unknownextgallery.svg';

//gaiamod
import gaiaGPTThumb from './gaiamod/GaiaGPT.png';
import gaiaBlocksThumb from './gaiamod/GaiaUtilities.png';
import gaiaExGalleryThumb from './gaiamod/gallery.png';
import sailormoonThumb from './gaiamod/lolsailormoon.png';
import kittenbotThumb from './gaiamod/KittenBot.png';
import cocreaFetchThumb from './gaiamod/cocreaFetch.png';
import promptsThumb from './gaiamod/prompts.png';
import spinachThumb from './gaiamod/spinach.png';
import catsThumb from './gaiamod/CatFacts.png';
import AlexaThumb from './gaiamod/Alexa.png';
import penguinThumb from './gaiamod/PenguinAttack.png';
import scratchmegarepoThumb from './gaiamod/ScratchMegaRepo.png';
import snailIDEGalleryThumb from './gaiamod/snailIDEEXGallery.png';
import loremIpsumThumb from './gaiamod/LoremIpsumThumb.png';
import webcamThumb from './gaiamod/WebCamThumb.png';
import chatNioThumb from './gaiamod/ChatNio.png';
import scratchUtilitiesIcon from './gaiamod/ScratchUtilities.png';
import turboWeatherIcon from './gaiamod/TurboWeather.png';
import wonderBlocksIcon from './gaiamod/WonderBlocks.png';
import catWithDonut from './gaiamod/DingDongDitch.svg';

//potentiamod
import potentiamodextgallery from './potentiamod/potentiamod.svg';
import potentiamodplaceholder from './potentiamod/placeholder.png';

import ampmodgalleryThumb from './gaiamod/AmpMod.svg';
import obgalleryIcon from './gaiamod/OmniBlocks.svg';

import shareImage from "./share/share.svg";

import lassImage from "./lass/lass.png";
import iftttImage from "./ifttt/ifttt.png";
import thingspeakImage from "./thingspeak/thingspeak.png";

import smartLumiesIconURL from './smart-lumies/smart-lumies.png';
import smartLumiesInsetIconURL from './smart-lumies/smart-lumies-small.svg';
import smartLumiesConnectionIconURL from './smart-lumies/smart-lumies-illustration.svg';
import smartLumiesConnectionSmallIconURL from './smart-lumies/smart-lumies-small.svg';
import smartLumiesConnectionTipIconURL from './smart-lumies/smart-lumies-button-illustration.svg';
import matatabotIconURL from './matatabot/matatabot.png';
import matatabotInsetIconURL from './matatabot/matatabot-small.svg';
import matatabotConnectionIconURL from './matatabot/matatabot-illustration.svg';
import matatabotConnectionSmallIconURL from './matatabot/matatabot-small.svg';
import midiIconURL from './midi/midi.png';
import midiInsetIconURL from './midi/midi-small.svg';
import spikePrimeIconURL from './spikePrime/spikePrime.png';
import spikePrimeInsetIconURL from './spikePrime/spikePrime-small.svg';
import spikePrimeConnectionIconURL from './spikePrime/spikePrime-illustration.svg';
import spikePrimeConnectionSmallIconURL from './spikePrime/spikePrime-small.svg';
import futureBoardIconURL from './futureBoard/futureBoard.png';
import futureBoardInsetIconURL from './futureBoard/futureBoard-small.svg';
import minecraftIconURL from './minecraft/minecraft.png';
import minecraftInsetIconURL from './minecraft/minecraft-small.svg';
import toolboxIconURL from './toolbox/toolbox.png';
import toolboxInsetIconURL from './toolbox/toolbox-small.svg';
import iCarProIconURL from './iCarPro/iCarPro.png';
import iCarProInsetIconURL from './iCarPro/iCarPro-small.svg';
import snapCircuitsU33IconURL from './snapCircuitsU33/snapCircuitsU33.png';
import snapCircuitsU33InsetIconURL from './snapCircuitsU33/snapCircuitsU33-small.svg';
import magicBlueUUIconURL from './magicBlueUU/magicBlueUU.png';
import magicBlueUUInsetIconURL from './magicBlueUU/magicBlueUU-small.svg';
import emoBlockImage from './emo/Scratch_emo.png';
import emoBlockInsertIconImage from './emo/bocco-emo_body.png';
import missmixalotIconURL from "./missmixalot/missmixalot.png";
import missmixalotInsetIconURL from "./missmixalot/missmixalot-small.svg";

import libraImage from './libra/Libra.png';
import libraInsetImage from './libra/Libra-small.svg';

import learningmlIconURL from './learningml-texts/learningml.png';
import learningmlTextInsetIconURL from './learningml-texts/learningml-text-small.svg';
import learningmlImageInsetIconURL from './learningml-images/learningml-image-small.svg';
import learningmlNumericalInsetIconURL from './learningml-numerical/learningml-numerical-small.svg';

import echidnaIconURL from './echidna/echidna.png';
import echidnaInsetIconURL from './echidna/erizo.png';
import echidnaConnectionIconURL from './echidna/echidna-illustration.svg';
import echidnaConnectionSmallIconURL from './echidna/echidna-small.svg';

import shredsdkIcon from './shredsdk/shredsdk.svg'
import utilsIcon from './utils/utilites.svg';
import gameutilsIcon from './gameutils/gameutils.svg'

import edubotIconURL from "./edubot/edubot.png";
import edubotInsetIconURL from "./edubot/edubot-small.svg";
import edubotConnectionIconURL from "./edubot/edubot-illustration.svg";
import edubotConnectionSmallIconURL from "./edubot/edubot-small.svg";

import jikkoIconURL from "./jikko/jikko.png";
import jikkoInsetIconURL from "./jikko/jikko-small.svg";
import jikkoConnectionIconURL from "./jikko/jikko-illustration.svg";
import jikkoConnectionSmallIconURL from "./jikko/jikko-small.svg";

import lineBlockImage from './line/line.png';
import lineBlockButtonImage from './line/line-small.png';

import customExtensionIcon from './custom/custom.svg';
import customExtIcon from './custom/CustomEx.svg';
import customExtInsetIcon from './custom/CustomSmall.svg';

import VMicon from './gaiamod/vm_library.svg';

import mysteryThumb from './gaiamod/unknown.png';
import mysteryInsetIcon from './gaiamod/unknown-small.png';
///////////////

const urlParams = new URLSearchParams(location.search);
const IsLocal = String(window.location.href).startsWith(`http://localhost:`);
const IsLiveTests = urlParams.has('livetests');
const IsSecretExt = urlParams.has('newchallengersapporaching');
const IsMysteriousExt = urlParams.has('666');

const menuItems = [
     {
        // not really an extension, but it's easiest to present it as one
        name: (
            <FormattedMessage
                defaultMessage="Custom Extension"
                description="Name of library item to load a custom extension from a remote source"
                id="tw.customExtension.name"
            />
        ),
        extensionId: '',
        iconURL: customExtIcon, //customExtensionIcon
		insetIconURL: customExtInsetIcon,
        description: (
            <FormattedMessage
                defaultMessage="Load custom extensions from URLs, files, or JavaScript source code."
                description="Description of library item to load a custom extension from a custom source"
                id="tw.customExtension.description"
            />
        ),
        featured: true
    },
	{
      extensionId: 'https://extensions.turbowarp.org/lab/video-sprites.js',
      name: 'Video Sprites',
      description: 'Replace sprites with a live video feed.',
	  iconURL: 'https://lab.scratch.mit.edu/static/assets/8bcbd3665e71d3c863c666b1b7ecad96.png',
	  tags: ['scratch'],
	  featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        customInsetColor: '#CF63CF',
        tags: ['scratch', 'noisemaker'],
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        tags: ['scratch', 'graphics'],
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true
    },
    {
        name: 'Animated Text',
        extensionId: 'text',
        iconURL: animatedTextIconURL,
        insetIconURL: animatedTextInsetIconURL,
        customInsetColor: '#9A66FF',
        tags: ['scratch'],
        description: 'Bring words to life.',
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        customInsetColor: '#74BDDC',
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true
    },
    {
        name: 'Face Sensing',
        extensionId: 'https://extensions.turbowarp.org/lab/face-sensing.js',
        iconURL: faceSensingIconURL,
        tags: ['scratch'],
        description: 'Sense faces with the camera.',
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        credits: 'Google TTS',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        customInsetColor: '#9966FF',
        tags: ['scratch', 'noisemaker'],
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        customInsetColor: '#5CB1D6',
        tags: ['scratch'],
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        customInsetColor: '#E64D00',
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        featured: true
	},
	{
        name: 'Gaia Utilities',
        extensionId: 'https://gaiamod-main.github.io/extensions/GaiaWindWave90/GaiaBlocks.js',
        credits: 'GaiaWindWave90 with some blocks from other users.',
        iconURL: gaiaBlocksThumb,
		insetIconURL: gaiamodIcon,
		customInsetColor: '#2D2DD2',
        tags: ['gaiamod', 'ai'],
		gaiaModRequired: true,
        description: 'Wonderful utility blocks!',
        featured: true
    },
	{
        name: 'GaiaGPT',
        extensionId: 'https://gaiamod-main.github.io/extensions/GaiaWindWave90/GaiaGPT.js',
        iconURL: gaiaGPTThumb,
		insetIconURL: gaiamodIcon,
		customInsetColor: '#2D2DD2',
        tags: ['gaiamod', 'ai'],
		gaiaModRequired: true,
        description: 'A GaiaMod modification of Pang AI with more prompts.',
        extDeveloper: 'logise1123 and GaiaWindWave90',
        internetConnectionRequired: true,
        featured: true
    },
	{
        name: 'Webcam Recorder',
        extensionId: 'https://gaiamod-main.github.io/extensions/GaiaWindWave90/Webcamrecorder.js',
        iconURL: webcamThumb,
		insetIconURL: gaiamodIcon,
		customInsetColor: '#2D2DD2',
        credits: '-SIPC-, with modifications by GaiaWindWave90',
        tags: ['gaiamod'],
		gaiaModRequired: true,
        description: 'Records videos straight out of webcam.',
        internetConnectionRequired: false,
        featured: true
    },
	{
        name: 'Prompts',
        extensionId: 'https://gaiamod-main.github.io/extensions/GaiaWindWave90/GTPPrompts.js',
        iconURL: promptsThumb,
		insetIconURL: gaiamodIcon,
		customInsetColor: '#2D2DD2',
        extDeveloper: 'GaiaWindWave90',
        tags: ['gaiamod', 'ai'],
		gaiaModRequired: true,
        description: 'Prompts made for Gaia AI. Inspired by the prompts extension found in Snail-IDE.',
        featured: true
    },
	{
        name: 'Wonder Blocks',
        extensionId: 'wonderblocks',
        iconURL: wonderBlocksIcon,
		insetIconURL: gaiamodIcon,
		customInsetColor: '#2D2DD2',
        tags: ['gaiamod'],
        description: 'Some mysterious blocks.',
        credits: 'GaiaWindWave90 with some blocks from other users.',
        gaiaModRequired: true,
        featured: true
    },
	{
        name: 'Spinach Facts',
        extensionId: 'https://gaiamod-main.github.io/extensions/GaiaWindWave90/SpinachFacts.js',
        iconURL: spinachThumb,
		insetIconURL: gaiamodIcon,
		customInsetColor: '#2D2DD2',
        credits: 'GaiaWindWave90 with some blocks from other users.',
        tags: ['gaiamod', 'jokes'],
		gaiaModRequired: true,
        description: 'An extension about spinach! Based on Gen1x\'s CATS, MrIncredibleMaker\'s DOGS and pooiod7\'s Raccoon Facts extensions.',
        internetConnectionRequired: true,
        featured: true
    },
	{
            name: 'Penguin Attack!',
            extensionId: 'https://gaiamod-main.github.io/extensions/GaiaWindWave90/PenguinAttack.js',
            iconURL: penguinThumb,
    		insetIconURL: gaiamodIcon,
	    	customInsetColor: '#2D2DD2',
            tags: ['gaiamod', 'jokes'],
			gaiaModRequired: true,
            internetConnectionRequired: true,
            credits: 'JeremyGamer13, with modifications by GaiaWindWave90',
            description: 'Edited version of the Fire in the Hole extension.',
            featured: true
	},
	{
	   extensionId: 'https://extensions.turbowarp.org/stretch.js',
       name: 'Stretch',
       description: 'Stretch sprites horizontally or vertically.',
       iconURL: 'https://extensions.turbowarp.org/images/stretch.svg',
       credits: 'GarboMuffin and TheStarWorld',
	   tags: ['turbowarp'],
       insetIconURL: turbowarpIcon,
       customInsetColor: '#ff4d4d',
	   featured: true
    },
    {
        name: 'GamePad',
        extensionId: 'Gamepad',
        tags: ['turbowarp', 'hardware'],
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        twDeveloper: 'GarboMuffin',
        iconURL: gp,
        description: 'Directly access gamepads instead of just mapping buttons to keys.',
        featured: true
    },
    {
        name: 'Physics',
        extensionId: 'https://extensions.turbowarp.org/box2d.js',
        tags: ['turbowarp'],
        extDeveloper: 'griffpatch',
        iconURL: griffpatchPhysicsThumb,
        insetIconURL: griffpatchPhysicsIcon,
        description: 'Box2D Physics extension created by Griffpatch.',
        customInsetColor: '#D9F0FF',
        featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/files.js',
      name: 'Files',
      description: 'Read and download files.',
      iconURL: 'https://extensions.turbowarp.org/images/files.svg',
      credits: 'GarboMuffin',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
        name: 'Pointer Lock',
        extensionId: 'https://extensions.turbowarp.org/pointerlock.js',
        tags: ['turbowarp'],
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        iconURL: pointerlockThumb,
        description: (
            <FormattedMessage
                defaultMessage='A extension to lock the mouse cursor in the stage.'
                description='Scratch utilities'
                id='gui.extension.pointerlock.description'
            />
        ),
        featured: true,
        internetConnectionRequired: false,
        twDeveloper: 'GarboMuffin'
    },
    {
        name: 'Mouse Cursor',
        extensionId: 'https://extensions.turbowarp.org/cursor.js',
        tags: ['turbowarp'],
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        iconURL: 'https://extensions.turbowarp.org/images/cursor.png',
        description: (
            <FormattedMessage
                defaultMessage='A extension to change what the mouse cursor looks like on the stage.'
                description='Scratch utilities'
                id='gui.extension.MouseCursor.description'
            />
        ),
        featured: true,
        internetConnectionRequired: false,
        twDeveloper: 'GarboMuffin'
    },
    {
      extensionId: 'https://extensions.turbowarp.org/runtime-options.js',
      name: 'Runtime Options',
      description: 'Get and modify turbo mode, framerate, interpolation, clone limit, stage size, and more.',
      iconURL: 'https://extensions.turbowarp.org/images/runtime-options.svg',
      credits: 'GarboMuffin',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/fetch.js',
      name: 'Fetch',
      description: 'Make requests to the broader internet.',
      iconURL: 'https://extensions.turbowarp.org/images/fetch.svg',
      credits: 'GarboMuffin',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/text.js',
      name: 'Text',
      description: 'Manipulate characters and text.',
      iconURL: 'https://extensions.turbowarp.org/images/text.svg',
      credits: 'CST1229, BludIsAnLemon and Man-o-Valor',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/local-storage.js',
      name: 'Local Storage',
      description: 'Store data persistently. Like cookies, but better.',
      iconURL: 'https://extensions.turbowarp.org/images/local-storage.svg',
      credits: 'infernostars and GarboMuffin',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/true-fantom/base.js',
      name: 'Base',
      description: 'Convert numbers between bases.',
      iconURL: 'https://extensions.turbowarp.org/images/true-fantom/base.svg',
      credits: 'TrueFantom',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/bitwise.js',
      name: 'Bitwise',
      description: 'Blocks that operate on the binary representation of numbers in computers.',
      iconURL: 'https://extensions.turbowarp.org/images/bitwise.svg',
      credits: 'TrueFantom',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Skyhigh173/bigint.js',
      name: 'BigInt',
      description: 'Math blocks that work on infinitely large integers (no decimals).',
      iconURL: 'https://extensions.turbowarp.org/images/Skyhigh173/bigint.svg',
      credits: 'Skyhigh173',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/utilities.js',
      name: 'Utilities',
      description: 'A bunch of interesting blocks.',
      iconURL: 'https://extensions.turbowarp.org/images/utilities.svg',
      'original': 'Sheep_maker',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/sound.js',
      name: 'URL Playback',
      description: 'Play sounds from URLs. Previously called \'Sound\'.',
      iconURL: 'https://extensions.turbowarp.org/images/sound.svg',
      credits: 'softed and GarboMuffin',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
        name: 'Video',
        extensionId: 'https://extensions.turbowarp.org/Lily/Video.js',
        extDeveloper: 'LilyMakesThings, SharkPool, and Fath11',
        iconURL: 'https://extensions.turbowarp.org/images/Lily/Video.svg',
		insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        tags: ['turbowarp'],
        description: 'Play videos from URLs.',
        featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/iframe.js',
      name: 'Iframe',
      description: 'Display webpages or HTML over the stage.',
      iconURL: 'https://extensions.turbowarp.org/images/iframe.svg',
      credits: 'GarboMuffin',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Clay/htmlEncode.js',
      name: 'HTML Encode',
      description: 'Escape untrusted text to safely include in HTML.',
      iconURL: 'https://extensions.turbowarp.org/images/Clay/htmlEncode.svg',
      credits: 'clay-rip',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
        name: 'Clipping and Blending',
        extensionId: 'https://extensions.turbowarp.org/Xeltalliv/clippingblending.js',
        iconURL: clippingblending,
        tags: ['turbowarp', 'graphics'],
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        description: 'Clipping outside of a specified rectangular area and additive color blending.',
        featured: true,
        twDeveloper: 'Vadik1'
    },
    {
      extensionId: 'https://extensions.turbowarp.org/clipboard.js',
      name: 'Clipboard',
      description: 'Read and write from the system clipboard.',
      iconURL: 'https://extensions.turbowarp.org/images/clipboard.svg',
      credits: 'tomyo-code, AdamMady and NamelessCat',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/obviousAlexC/penPlus.js',
      name: 'Pen Plus V7',
      description: 'Advanced rendering capabilities.',
      iconURL: 'https://extensions.turbowarp.org/images/obviousAlexC/penPlus.svg',
      credits: 'ObviousAlexC and Pen-Group',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/penplus.js',
      name: 'Pen Plus V5 (Old)',
      description: 'Replaced by Pen Plus V7.',
      iconURL: 'https://extensions.turbowarp.org/images/penplus.svg',
      credits: 'ObviousAlexC',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Xeltalliv/simple3D.js',
      name: 'Simple 3D',
      description: 'Make GPU accelerated 3D projects easily.',
      iconURL: 'https://extensions.turbowarp.org/images/Xeltalliv/simple3D.png',
      credits: 'Vadik1',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/Skins.js',
      name: 'Skins',
      description: 'Have your sprites render as other images or costumes.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/Skins.svg',
      credits: 'LilyMakesThings',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/obviousAlexC/SensingPlus.js',
      name: 'Sensing Plus',
      description: 'An extension to the sensing category.',
      iconURL: 'https://extensions.turbowarp.org/images/obviousAlexC/SensingPlus.svg',
      credits: 'ObviousAlexC',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/CubesterYT/KeySimulation.js',
      name: 'Key Simulation',
      description: 'Simulate key presses and mouse clicks.',
      iconURL: 'https://extensions.turbowarp.org/images/CubesterYT/KeySimulation.svg',
      credits: 'CubesterYT',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
        name: 'Clones+',
        extensionId: 'https://extensions.turbowarp.org/Lily/ClonesPlus.js',
        tags: ['turbowarp', 'categoryexpansion'],
        iconURL: 'https://extensions.turbowarp.org/images/Lily/ClonesPlus.svg',
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        description: 'Expansion of Scratch\'s clone features.',
        featured: true,
        twDeveloper: 'LilyMakesThings'
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/LooksPlus.js',
      name: 'Looks Plus',
      description: 'Expands upon the looks category, allowing you to show/hide, get costume data and edit SVG skins on sprites.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/LooksPlus.svg',
      credits: 'LilyMakesThings',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/MoreEvents.js',
      name: 'More Events',
      description: 'Start your scripts in new ways.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/MoreEvents.svg',
      credits: 'LilyMakesThings',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/ListTools.js',
      name: 'List Tools',
      description: 'An assortment of new ways to interact with lists.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/ListTools.svg',
      credits: 'LilyMakesThings',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/veggiecan/mobilekeyboard.js',
      name: 'Mobile Keyboard',
      description: 'Show the keyboard on mobile devices and get the users input without showing any input modal.',
      iconURL: 'https://extensions.turbowarp.org/images/veggiecan/mobilekeyboard.svg',
      credits: 'veggiecan0419',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/NexusKitten/moremotion.js',
      name: 'More Motion',
      description: 'More motion-related blocks.',
      iconURL: 'https://extensions.turbowarp.org/images/NexusKitten/moremotion.svg',
      credits: 'NamelessCat',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/CubesterYT/WindowControls.js',
      name: 'Window Controls',
      description: 'Move, resize, rename the window, enter fullscreen, get screen size, and more.',
      iconURL: 'https://extensions.turbowarp.org/images/CubesterYT/WindowControls.svg',
      credits: 'CubesterYT',
      'original': 'BlueDome77',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/veggiecan/browserfullscreen.js',
      name: 'Browser Fullscreen',
      description: 'Enter and exit fullscreen mode.',
      iconURL: 'https://extensions.turbowarp.org/images/veggiecan/browserfullscreen.svg',
      credits: 'Veggiecan0419',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/shreder95ua/resolution.js',
      name: 'Screen Resolution',
      description: 'Get the resolution of the primary screen.',
      iconURL: 'https://extensions.turbowarp.org/images/shreder95ua/resolution.svg',
      credits: 'shreder95ua',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/XmerOriginals/closecontrol.js',
      name: 'Ask Before Closing Tab',
      description: 'Show a prompt when someone tries to close the tab.',
      iconURL: 'https://extensions.turbowarp.org/images/XmerOriginals/closecontrol.svg',
      credits: 'XmerOriginals',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/navigator.js',
      name: 'Navigator',
      description: 'Details about the user\'s browser and operating system.',
      iconURL: 'https://extensions.turbowarp.org/images/navigator.svg',
      credits: 'GarboMuffin',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/battery.js',
      name: 'Battery',
      description: 'Access information about the battery of phones or laptops. May not work on all devices and browsers.',
      iconURL: 'https://extensions.turbowarp.org/images/battery.svg',
      credits: 'GarboMuffin',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/PwLDev/vibration.js',
      name: 'Vibration',
      description: 'Control the device\'s vibration. Only works on Chrome for Android.',
      iconURL: 'https://extensions.turbowarp.org/images/PwLDev/vibration.svg',
      credits: 'PwLDev',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/TheShovel/CustomStyles.js',
      name: 'Custom Styles',
      description: 'Customize the appearance of variable monitors and prompts in your project.',
      iconURL: 'https://extensions.turbowarp.org/images/TheShovel/CustomStyles.svg',
      credits: 'TheShovel',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/NexusKitten/controlcontrols.js',
      name: 'Control Controls',
      description: 'Show and hide the project\'s controls.',
      iconURL: 'https://extensions.turbowarp.org/images/NexusKitten/controlcontrols.svg',
      credits: 'NamelessCat',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/mdwalters/notifications.js',
      name: 'Notifications',
      description: 'Display notifications.',
      iconURL: 'https://extensions.turbowarp.org/images/mdwalters/notifications.svg',
      credits: 'mdwalters',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/XeroName/Deltatime.js',
      name: 'Delta Time',
      description: 'Precise delta timing blocks.',
      iconURL: 'https://extensions.turbowarp.org/images/XeroName/Deltatime.svg',
      credits: 'XeroName',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/ar.js',
      name: 'Augmented Reality',
      description: 'Shows image from camera and performs motion tracking, allowing 3D projects to correctly overlay virtual objects on real world.',
      iconURL: 'https://extensions.turbowarp.org/images/ar.svg',
      credits: 'Vadik1',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true,
    },
    {
      extensionId: 'https://extensions.turbowarp.org/encoding.js',
      name: 'Encoding',
      description: 'Encode and decode strings into their unicode numbers, base 64, or URLs.',
      iconURL: 'https://extensions.turbowarp.org/images/encoding.svg',
      credits: '-SIPC-',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/SoundExpanded.js',
      name: 'Sound Expanded',
      description: 'Adds more sound-related blocks.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/SoundExpanded.svg',
      credits: 'LilyMakesThings',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
        name: 'TurboWarp Temporary Variables',
        extensionId: 'lmsTempVars2',
        iconURL: lilyTempVariablesExtensionIcon,
        tags: ['turbowarp'],
        description: 'Create disposable runtime or thread variables.',
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        credits: 'LilyMakesThings',
        featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/MoreTimers.js',
      name: 'More Timers',
      description: 'Control several timers at once.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/MoreTimers.svg',
      credits: 'LilyMakesThings',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/clouddata-ping.js',
      name: 'Ping Cloud Data',
      description: 'Determine whether a cloud variable server is probably up.',
      iconURL: 'https://extensions.turbowarp.org/images/clouddata-ping.svg',
      credits: 'GarboMuffin',
      'original': 'TheShovel',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
        name: 'CloudLink',
        extensionId: 'https://extensions.penguinmod.com/extensions/MikeDev101/cloudlink.js',
        tags: ['turbowarp'],
        insetIconURL: cloudlinkIcon,
        iconURL: 'https://extensions.penguinmod.com/images/MikeDev101/cloudlink.svg',
        description: 'A powerful WebSocket extension for Scratch.',
        featured: true,
        extDeveloper: 'MikeDev',
        internetConnectionRequired: true
    },
    {
        name: 'Network',
        extensionId: 'https://extensions.turbowarp.org/true-fantom/network.js',
        extDeveloper: 'TrueFantom',
        iconURL: 'https://extensions.turbowarp.org/images/true-fantom/network.svg',
		insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        tags: ['turbowarp', 'datamgmt'],
        description: 'Various blocks for interacting with the network.',
        featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/true-fantom/math.js',
      name: 'Math',
      description: 'A lot of operators blocks, from exponentiation to trigonometric functions.',
      iconURL: 'https://extensions.turbowarp.org/images/true-fantom/math.svg',
      credits: 'TrueFantom',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/true-fantom/regexp.js',
      name: 'RegExp',
      description: 'Full interface for working with Regular Expressions.',
      iconURL: 'https://extensions.turbowarp.org/images/true-fantom/regexp.svg',
      credits: 'TrueFantom',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/true-fantom/couplers.js',
      name: 'Couplers',
      description: 'A few adapter blocks.',
      iconURL: 'https://extensions.turbowarp.org/images/true-fantom/couplers.svg',
      credits: 'TrueFantom',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/DogeisCut/FormatNumbers.js',
      name: 'Format Numbers',
      description: 'Format large numbers into AD standard, fixed decimal, comma separated, or scientific notation.',
      iconURL: 'https://extensions.turbowarp.org/images/DogeisCut/FormatNumbers.png',
      credits: 'DogeisCut',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
        name: 'All Menus',
        extensionId: 'https://extensions.penguinmod.com/extensions/Lily/AllMenus.js',
        iconURL: 'https://extensions.turbowarp.org/images/Lily/AllMenus.svg',
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        tags: ['turbowarp'],
        description: 'Every dropdown menu for each block, in one extension.',
        extDeveloper: 'LilyMakesThings',
        featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/HackedBlocks.js',
      name: 'Hidden Block Collection',
      description: 'Various \'hacked blocks\' that work in Scratch but are not visible in the palette.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/HackedBlocks.svg',
      credits: 'LilyMakesThings and pumpkinhasapatch',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/Cast.js',
      name: 'Cast',
      description: 'Convert values between types.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/Cast.svg',
      credits: 'LilyMakesThings',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/-SIPC-/time.js',
      name: 'Time',
      description: 'Blocks for times, dates, and time zones.',
      iconURL: 'https://extensions.turbowarp.org/images/-SIPC-/time.svg',
      credits: '-SIPC- and SharkPool',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/-SIPC-/consoles.js',
      name: 'Consoles (TW)',
      description: 'Blocks that interact with the JavaScript console built in to your browser\'s developer tools.',
      iconURL: 'https://extensions.turbowarp.org/images/-SIPC-/consoles.svg',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
      credits: '-SIPC-',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/ZXMushroom63/searchApi.js',
      name: 'Search Params',
      description: 'Interact with URL search parameters: the part of the URL after a question mark.',
      iconURL: 'https://extensions.turbowarp.org/images/ZXMushroom63/searchApi.svg',
      credits: 'ZXMushroom63',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
   {
            name: 'ShovelUtils',
            extensionId: 'https://extensions.turbowarp.org/TheShovel/ShovelUtils.js',
            tags: ['turbowarp'],
            iconURL: 'https://extensions.turbowarp.org/images/TheShovel/ShovelUtils.png',
            insetIconURL: turbowarpIcon,
			customInsetColor: '#ff4d4d',
            description: 'A bunch of miscellaneous blocks.',
            featured: true,
            twDeveloper: 'TheShovel and Mio'
        },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/Assets.js',
      name: 'Asset Manager',
      description: 'Add, remove, and get data from various types of assets.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/Assets.svg',
      credits: 'LilyMakesThings and Mio',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/DNin/wake-lock.js',
      name: 'Wake Lock',
      description: 'Prevent the computer from falling asleep.',
      iconURL: 'https://extensions.turbowarp.org/images/DNin/wake-lock.svg',
      credits: 'D-ScratchNinja',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Skyhigh173/json.js',
      name: 'JSON (TW)',
      description: 'Handle JSON strings and arrays.',
      iconURL: 'https://extensions.turbowarp.org/images/Skyhigh173/json.svg',
      credits: 'Skyhigh173 and Mio',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/mbw/xml.js',
      name: 'XML (TW)',
      description: 'Create and extract values from XML.',
      iconURL: 'https://extensions.turbowarp.org/images/mbw/xml.svg',
      credits: 'mybearworld',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/numerical-encoding-2.js',
      name: 'Numerical Encoding V2',
      description: 'Encode strings as numbers for cloud variables. Not compatible with V1 due to using much more efficient format.',
      iconURL: 'https://extensions.turbowarp.org/images/numerical-encoding-2.svg',
      credits: 'GarboMuffin',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/cs2627883/numericalencoding.js',
      name: 'Numerical Encoding V1',
      description: 'Use V2 instead as it is more efficient. V1 only exists for compatibility reasons.',
      credits: 'cs2627883',
	  iconURL: 'https://extensions.turbowarp.org/images/unknown.svg',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/DT/cameracontrols.js',
      name: 'Camera V1',
      description: 'Move the visible part of the stage.',
      iconURL: 'https://extensions.turbowarp.org/images/DT/cameracontrols.svg',
      credits: 'DT',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/TheShovel/CanvasEffects.js',
      name: 'Canvas Effects (TW)',
      description: 'Apply visual effects to the entire stage.',
      iconURL: 'https://extensions.turbowarp.org/images/TheShovel/CanvasEffects.svg',
      credits: 'TheShovel and SharkPool',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Longboost/color_channels.js',
      name: 'RGB Channels',
      description: 'Only render or stamp certain RGB channels.',
      iconURL: 'https://extensions.turbowarp.org/images/Longboost/color_channels.svg',
      credits: 'Longboost',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
        name: 'Zip',
        extensionId: 'https://extensions.turbowarp.org/CST1229/zip.js',
        iconURL: 'https://extensions.turbowarp.org/images/CST1229/zip.svg',
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        tags: ['turbowarp', 'datamgmt'],
        description: 'Create and edit .zip format files, including .sb3 files.',
        twDeveloper: 'CST1229',
        featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/CST1229/images.js',
      name: 'Images (TW)',
      description: 'Some blocks for working with images.',
      iconURL: 'https://extensions.turbowarp.org/images/CST1229/images.svg',
      'original': 'CST1229',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/0832/rxFS2.js',
      name: 'rxFS',
      description: 'Blocks for interacting with a virtual in-memory filesystem.',
      iconURL: 'https://extensions.turbowarp.org/images/0832/rxFS2.svg',
      credits: '0832',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/NexusKitten/sgrab.js',
      name: 'S-Grab',
      description: 'Get information about Scratch projects and Scratch users.',
      iconURL: 'https://extensions.turbowarp.org/images/NexusKitten/sgrab.svg',
      credits: 'NamelessCat',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/NOname-awa/graphics2d.js',
      name: 'Graphics 2D',
      description: 'Blocks to compute lengths, angles, and areas in two dimensions.',
      iconURL: 'https://extensions.turbowarp.org/images/NOname-awa/graphics2d.svg',
      credits: 'NOname-awa',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/NOname-awa/more-comparisons.js',
      name: 'More Comparisons',
      description: 'More comparison blocks.',
      iconURL: 'https://extensions.turbowarp.org/images/NOname-awa/more-comparisons.svg',
      credits: 'NOname-awa',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
        name: 'Tweening',
        extensionId: 'jgTween',
        credits: 'easings.net, Arrow & GarboMuffin',
        description: 'Smoothly animating values using different easing functions and directions.',
        iconURL: 'https://extensions.turbowarp.org/images/JeremyGamer13/tween.svg',
		insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        tags: ['turbowarp'],
        featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/rixxyx.js',
      name: 'RixxyX',
      description: 'Various utility blocks.',
      iconURL: 'https://extensions.turbowarp.org/images/rixxyx.svg',
      credits: 'RixTheTyrunt',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/lmsutils.js',
      name: 'Lily\'s Toolbox',
      description: 'Previously called LMS Utilities.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/lmsutils.svg',
      credits: 'LilyMakesThings',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/qxsck/data-analysis.js',
      name: 'Data Analysis',
      description: 'Blocks to compute means, medians, maximums, minimums, variances, and modes.',
      iconURL: 'https://extensions.turbowarp.org/images/qxsck/data-analysis.svg',
      credits: 'qxsck',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/qxsck/var-and-list.js',
      name: 'Variable and list',
      description: 'More blocks related to variables and lists.',
      iconURL: 'https://extensions.turbowarp.org/images/qxsck/var-and-list.svg',
      credits: 'qxsck',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/vercte/dictionaries.js',
      name: 'Dictionaries',
      description: 'Use the power of dictionaries in your project.',
      iconURL: 'https://extensions.turbowarp.org/images/vercte/dictionaries.svg',
      credits: 'Vercte',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
        name: 'HTTP',
        extensionId: 'https://extensions.turbowarp.org/godslayerakp/http.js',
        iconURL: 'https://extensions.turbowarp.org/images/godslayerakp/http.svg',
        insetIconURL: turbowarpIcon,
        tags: ['turbowarp'],
        description: 'Comprehensive extension for interacting with external websites.',
        featured: true,
        internetConnectionRequired: true,
        customInsetColor: '#ff4d4d'
    },
    {
      extensionId: 'https://extensions.turbowarp.org/godslayerakp/ws.js',
      name: 'WebSocket',
      description: 'Manually connect to WebSocket servers.',
      iconURL: 'https://extensions.turbowarp.org/images/godslayerakp/ws.png',
      credits: 'RedMan13',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/CubesterYT/Webhooks.js',
      name: 'Webhooks',
      description: 'A modern, very capable Webhook extension.',
      iconURL: 'https://extensions.turbowarp.org/images/CubesterYT/Webhooks.svg',
      credits: 'CubesterYT',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/CommentBlocks.js',
      name: 'Comment Blocks',
      description: 'Annotate your scripts.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/CommentBlocks.svg',
      credits: 'LilyMakesThings',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/veggiecan/LongmanDictionary.js',
      name: 'Longman Dictionary',
      description: 'Get the definitions of words from the Longman Dictionary in your projects.',
      iconURL: 'https://extensions.turbowarp.org/images/veggiecan/LongmanDictionary.svg',
      credits: 'veggiecan0419',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Alestore/nfcwarp.js',
      name: 'NFCWarp',
      description: 'Allows reading data from NFC (NDEF) devices. Only works in Chrome on Android.',
      iconURL: 'https://extensions.turbowarp.org/images/Alestore/nfcwarp.svg',
      credits: 'Alestore Games',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/NishiOwO/dectalk.js',
      name: 'DECtalk Text to Speech',
      description: 'Text to speech powered by DECtalk. Does not use an internet connection, so it works offline. English only.',
      iconURL: 'https://extensions.turbowarp.org/images/NishiOwO/dectalk.png',
      credits: 'NishiOwO',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/steamworks.js',
      name: 'Steamworks',
      description: 'Connect your project to Steamworks APIs.',
      iconURL: 'https://extensions.turbowarp.org/images/unknown.svg',
      credits: 'GarboMuffin',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/itchio.js',
      name: 'itch.io',
      description: 'Blocks that interact with the itch.io website. Unofficial.',
      iconURL: 'https://extensions.turbowarp.org/images/itchio.svg',
      credits: 'softed',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/gamejolt.js',
      name: 'Game Jolt',
      description: 'Blocks that allow games to interact with the GameJolt API. Unofficial.',
      iconURL: 'https://extensions.turbowarp.org/images/gamejolt.png',
      credits: 'softed',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
   {
        name: 'Newgrounds',
        extensionId: 'https://extensions.turbowarp.org/obviousAlexC/newgroundsIO.js',
        extDeveloper: 'ObviousAlexC',
        iconURL: 'https://extensions.turbowarp.org/images/obviousAlexC/newgroundsIO.svg',
		insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        tags: ['turbowarp', 'datamgmt'],
        description: 'Blocks that allow games to interact with the Newgrounds API.',
        featured: true
    },
	 {
        name: 'Dangerous, But Useful',
        extensionId: 'https://raw.githubusercontent.com/David-Orangemoon/Modified-Extension-Loader-Turbowarp/main/custom%20extensions/UpgradedDangerousBusUseful.js',
        iconURL: 'https://raw.githubusercontent.com/David-Orangemoon/Modified-Extension-Loader-Turbowarp/main/extendedGallery/Icons/DBU.svg',
		insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        tags: ['turbowarp'],
        description: 'Dangerous Utility Blocks!',
		extDeveloper: 'ObviousAlexC',
        featured: true
		
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/McUtils.js',
      name: 'McUtils',
      description: 'Helpful utilities for any fast food employee.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/McUtils.png',
      credits: 'LilyMakesThings',
	  tags: ['turbowarp', 'jokes'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
	{
            name: (
                <FormattedMessage
                    defaultMessage='TurboWarp Blocks'
                    description='Name of TW extension'
                    id='tw.twExtension.name'
                    values={{
                        APP_NAME: 'TurboWarp'
                    }}
                />
            ),
            extensionId: 'tw',
            twDeveloper: 'GarboMuffin',
            tags: ['turbowarp'],
            insetIconURL: turbowarpIcon,
			customInsetColor: '#ff4d4d',
            iconURL: twIcon,
            description: 'Weird new blocks. Replaced by Sensing Expansion.',
            featured: true
	},
	{
		name: 'Shovel Debugger',
        description: 'Shovel\'s improved and feature rich debugger!',
        extensionId: 'https://extensions.penguinmod.com/extensions/TheShovel/shoveldebugger.js',
        iconURL: 'https://extensions.penguinmod.com/images/TheShovel/thumbnail-shoveldebugger.avif',
        credits: 'TheShovel',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
    {
        name: 'Server Storage',
        description: 'Similar to the server storage blocks in the \'storage\' extension, but with a better server uptime and non-global keys.\nDid you know the server is open source?',
        extensionId: 'https://extensions.penguinmod.com/extensions/Ikelene/serverStorageExtension.js',
        iconURL: 'https://extensions.penguinmod.com/images/Ikelene/serverStorageIMG.avif',
        credits: 'Ikelene',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        featured: true
    },
    {
        name: 'Storage Plus',
        description: 'A storage extension with many more features. Featuring server storage (with a fast server), local storage and more!',
        extensionId: 'https://extensions.penguinmod.com/extensions/Gen1x/storage_plus.js',
        iconURL: 'https://extensions.penguinmod.com/images/Gen1x/storage_plus.avif',
        credits: 'G1nX',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
    {
        name: 'MotionSprite',
        description: 'An advanced math-based animation system',
        extensionId: 'https://extensions.penguinmod.com/extensions/TheShovel/qoan-renderer.js',
        iconURL: 'https://extensions.penguinmod.com/images/TheShovel/thumbnail-motionsprite.avif',
        isGitHub: true,
        credits: 'TheShovel',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
    {
        name: 'Boxed Physics',
        description: 'Implements the Box2D physics engine into PenguinMod, adding joints, springs, etc. This is different from TurboWarp\'s implementation.',
        extensionId: 'https://extensions.penguinmod.com/extensions/pooiod/Box2D.js',
        iconURL: 'https://extensions.penguinmod.com/images/pooiod/B2Dimg.svg',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        credits: 'pooiod7',
		featured: true
    },
    {
        name: 'Lighting',
        description: 'A fast, powerful and easy-to-use lighting engine powered by WebGL!',
        extensionId: 'https://extensions.penguinmod.com/extensions/Gen1x/lighting.js',
        iconURL: 'https://extensions.penguinmod.com/images/Gen1x/lighting.avif',
        credits: 'G1nX',
        tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
	{
        name: 'Video Sharing',
        extensionId: 'https://extensions.penguinmod.com/extensions/pooiod/VideoSharing.js',
        iconURL: 'https://extensions.penguinmod.com/images/pooiod/VideoSharing.svg',
        tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        description: 'Share your screen or camera to your projects!',
        extDeveloper: 'Pooiod7',
        featured: true
    },
	{
        name: 'Cockatiel Location',
        description: 'Fetch Users\' IP Addresses and Location.',
        extensionId: 'https://extensions.penguinmod.com/extensions/bruhbeast-pixel/CockatielLocation.js',
        iconURL: 'https://extensions.penguinmod.com/images/bruhbeast-pixel/CockatielLocation.svg',
        credits: 'bruhbeast-pixel',
        tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
		{
        name: 'Blobs',
        description: 'An extension made for handling blobs which can be used to store files. Allows to easily make blobs for the Js extension.',
        extensionId: 'https://extensions.penguinmod.com/extensions/Faunks/Blobs.js',
        iconURL: 'https://extensions.penguinmod.com/images/Faunks/Blobs.avif',
        credits: 'Faunks',
        tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
    {
        name: 'GPU.sb3',
        description: 'Use WebGPU compute shaders to accelerate your projects. Use Pen+ for rendering, not this.',
        extensionId: 'https://extensions.penguinmod.com/extensions/derpygamer2142/gpusb3.js',
        iconURL: 'https://extensions.penguinmod.com/images/derpygamer2142/gpusb3.png',
        credits: 'derpygamer2142',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
    {
        name: 'Beat Sync',
        description: 'An extension designed to let you sync anything in your project to a musical beat, with incredible precision.',
        extensionId: 'https://extensions.penguinmod.com/extensions/Gen1x/beat_sync.js',
        iconURL: 'https://extensions.penguinmod.com/images/Gen1x/beat_sync.avif',
        credits: 'G1nX',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
	{
        name: 'Discord Auth',
        description: 'Login with discord to your projects. Identify users by ID and username in a secure and easy way!',
        extensionId: 'https://extensions.penguinmod.com/extensions/NotHouse/DiscordAuth.js',
        iconURL: 'https://extensions.penguinmod.com/images/NotHouse/DiscordAuth-banner.avif',
        credits: 'enderhacker',
        tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
	{
        name: 'Google Auth',
        description: 'Login with Google to your projects. Allows getting a name, profile picture and email from the google account.',
        extensionId: 'https://extensions.penguinmod.com/extensions/Ikelene/googleAuthExtension.js',
        iconURL: 'https://extensions.penguinmod.com/images/Ikelene/ExtensionBanner.avif',
        credits: 'Ikelene',
        tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
	{
        name: 'Twitch',
        description: 'Communicate with your Twitch Chat on GaiaMod!',
        extensionId: 'https://extensions.penguinmod.com/extensions/bop_tw/Twitch.js',
        iconURL: 'https://extensions.penguinmod.com/images/bop_tw/Twitch.avif',
        credits: 'bop_tw',
        tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
	{
        name: 'Chess',
        description: 'A powerful extension that lets you manage a chessboard, customize it, use Stockfish 17 (via API), a local chess engine (Lozza) and much, MUCH more!',
        extensionId: 'https://extensions.penguinmod.com/extensions/Gen1x/chess-ext.js',
        iconURL: 'https://extensions.penguinmod.com/images/Gen1x/chess-ext.avif',
        credits: 'G1nX',
        tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
	{
        name: 'Free Servers',
        description: 'Here you can find a free server for your projects. And also check whether it is working now or not.',
        extensionId: 'https://extensions.penguinmod.com/extensions/WAYLIVES/FreeServers.js',
        iconURL: 'https://extensions.penguinmod.com/images/WAYLIVES/FreeServersIMG.svg',
        credits: 'WAYLIVES',
        tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
	 {
        name: 'More Types',
        description: 'Adds more value types to PenguinMod, implementing Functions, Objects, Arrays, Sets, Maps, Symbols and Nothing.',
        extensionId: 'https://extensions.penguinmod.com/extensions/VeryGoodScratcher42/More-Types.js',
        iconURL: 'https://extensions.penguinmod.com/images/VeryGoodScratcher42/More-Types.avif',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        credits: 'VeryGoodScratcher42',
        featured: true
    },
	{
        name: 'Counter++',
        description: 'Count anything, at any time, in PenguinMod!',
        extensionId: 'https://extensions.penguinmod.com/extensions/MrRedstonia/counterplusplus.js',
        iconURL: 'https://extensions.penguinmod.com/images/MrRedstonia/counterplusplus.avif',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        credits: 'MrRedstonia',
        featured: true
    },
    {
        name: 'How many lines?',
        description: 'Blocks to determine the amount of new lines in a piece of text.',
        extensionId: 'https://extensions.penguinmod.com/extensions/Monochromasity/howmanylines.js',
        iconURL: 'https://extensions.penguinmod.com/images/Monochromasity/placeholder-howmanylines.avif',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        credits: 'Monochromasity',
        featured: true
    },
    {
        name: 'Paint Utils',
        description: 'A colour extension that lets you mix colours.',
        extensionId: 'https://extensions.penguinmod.com/extensions/Fruits555000/PaintUtils.js',
        iconURL: 'https://extensions.penguinmod.com/images/Fruits555000/PaintUtils.svg',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        credits: 'Fruits555000',
        featured: true
    },
    {
        name: 'Resolution',
        description: 'Provides utility blocks that simplify the creation of projects with dynamic resolution support.',
        extensionId: 'https://extensions.penguinmod.com/extensions/DogeisCut/Resolution.js',
        iconURL: 'https://extensions.penguinmod.com/images/DogeisCut/Resolution.svg',
        credits: 'DogeisCut',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        featured: true 
    },
    {
        name: 'Device Motion',
        description: 'Use Device Motion API to get rotation or movement of the device. Works best on mobile devices. \n Thumbnail by Dillon. ',
        extensionId: 'https://extensions.penguinmod.com/extensions/gaimerI17/DeviceMotion.js',
        iconURL: 'https://extensions.penguinmod.com/images/gaimerI17/DeviceMotion.avif',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        credits: 'gaimerI',
        featured: true
    },
	 {
        name: 'WindowHasher',
        description: 'Interact with URL hash: the part of the URL after a hashtag',
        extensionId: 'https://extensions.penguinmod.com/extensions/pooiod/WindowHasher.js',
        iconURL: 'https://extensions.penguinmod.com/images/pooiod/WindowHasher.avif',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        credits: 'pooiod7',
		featured: true
    },
	{
        name: 'File Upload',
        description: 'Upload files to the Network, can also used with Files extension.',
        extensionId: 'https://extensions.penguinmod.com/extensions/Codefoxy/cfupload.js',
        iconURL: 'https://extensions.penguinmod.com/images/Codefoxy/cfupload.svg',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        credits: 'Codefoxy',
		featured: true
    },
    {
        name: 'Scratchblocks',
        description: 'Generate blocks in the Scratch3, or Scratch2 format.',
        extensionId: 'https://extensions.penguinmod.com/extensions/pooiod/Scratchblocks.js',
        iconURL: 'https://extensions.penguinmod.com/images/pooiod/Scratchblocks.svg',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        credits: 'pooiod7',
		featured: true
    },
    {
        name: 'Object',
        description: 'Handle large JSON files at an extreme speed.',
        extensionId: 'https://extensions.penguinmod.com/extensions/skyhigh173/object.js',
        iconURL: 'https://extensions.penguinmod.com/images/skyhigh173/object.svg',
        credits: 'skyhigh173',
        tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
    {
        name: 'Extra Timers',
        description: 'Allows for the creation and management of additional timer blocks.',
        notes: 'thumbnail by Dillon',
        extensionId: 'https://extensions.penguinmod.com/extensions/steve0greatness/timers.js',
        iconURL: 'https://extensions.penguinmod.com/images/steve0greatness/timers.svg',
        credits: 'Steve0Greatness',
        tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
    
    {
        name: 'Dictation',
        description: 'Convert your voice into text. (not supported in all browsers)',
        extensionId: 'https://extensions.penguinmod.com/extensions/pooiod/Dictation.js',
        iconURL: 'https://extensions.penguinmod.com/images/pooiod/Dictation.svg',
        credits: 'pooiod7',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
        {
        name: 'Doodle Recognition',
        description: 'A implementation of Google\'s Quick Draw image vision model',
        extensionId: 'https://extensions.penguinmod.com/extensions/TheShovel/doodlerec.js',
        iconURL: 'https://extensions.penguinmod.com/images/TheShovel/thumbnail-doodlerec.avif',
        credits: 'TheShovel',
        tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
            {
        name: 'Stylus',
        description: 'Get the pressure and tilt of a stylus or graphic tablet',
        extensionId: 'https://extensions.penguinmod.com/extensions/sourdoggy/stylus extension.js',
        iconURL: 'https://extensions.penguinmod.com/images/sourdoggy/stylus_ext.avif',
        credits: 'sourdoggy',
        tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
    {
        name: 'Cryptography',
        description: 'Hash, encrypt and verify values using various algorithms. Actual security not guaranteed',
        extensionId: 'https://extensions.penguinmod.com/extensions/gaimerI17/crypto.js',
        iconURL: 'https://extensions.penguinmod.com/images/gaimerI17/crypto.avif',
        credits: 'gaimerI17',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
    {
        name: 'Online Captcha',
        description: 'Protect your project with simple, easy to use captcha implementation. Fully client-side, bypass-proof captcha solution!',
        extensionId: 'https://extensions.penguinmod.com/extensions/NotHouse/OnlineCaptcha.js',
        iconURL: 'https://extensions.penguinmod.com/images/NotHouse/OnlineCaptcha-banner.avif',
        credits: 'enderhacker',
        tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
    {
        name: 'Better Storage',
        description: 'Like PenguinMod\'s Storage Extension, but with a couple more features, and faster servers.',
        extensionId: 'https://extensions.penguinmod.com/extensions/Gen1x/better_storage.js',
        iconURL: 'https://extensions.penguinmod.com/images/Gen1x/betterstorage.avif',
        credits: 'G1nX',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
    {
        name: 'Mouth Washer',
        description: 'Includes many utilities related to cleaning bad words, swearing and profanity. Thought of as an extra layer of security for filtering messages.\n\n(ft. violet and jwklong)',
        extensionId: 'https://extensions.penguinmod.com/extensions/Gen1x/mouth_washer.js',
        iconURL: 'https://extensions.penguinmod.com/images/Gen1x/mw-placeholder.avif',
        credits: 'G1nX',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },

        {
        name: 'Smoke Detector',
        description: 'Plays a beep every 30 seconds.',
        extensionId: 'https://extensions.penguinmod.com/extensions/electricfuzzball_pm/firealarm.js',
        iconURL: 'https://extensions.penguinmod.com/images/electricfuzzball_pm/firealarm.svg',
        credits: 'ElectricFuzzball_PM',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
    {
        name: 'E2EE',
        description: 'A general-purpose E2EE (End-to-End Encryption) extension for Scratch.',
        extensionId: 'https://extensions.penguinmod.com/extensions/MikeDev101/e2ee.js',
        iconURL: 'https://extensions.penguinmod.com/images/MikeDev101/e2ee.svg',
        credits: 'MikeDev101',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        featured: true
    },
	    {
        name: 'Extension Exposer',
        description: 'Access the raw functions from other extensions.',
        extensionId: 'https://extensions.penguinmod.com/extensions/TheShovel/extexp.js',
        iconURL: 'https://extensions.penguinmod.com/images/TheShovel/placeholder-extexp.avif',
        credits: 'TheShovel',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        featured: true
    },
	 {
        name: 'CORS Proxy',
        description: 'Accessible CORS Proxies for fetching information with PenguinMod.',
        extensionId: 'https://extensions.penguinmod.com/extensions/NamelessCat/corsproxy.js',
        iconURL: 'https://extensions.penguinmod.com/images/NamelessCat/corsproxy.avif',
        credits: 'NamelessCat',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        featured: true
    },
	 {
        name: 'YeetYourFiles',
        description: 'Upload files to the cloud by throwing it to outer space!',
        extensionId: 'https://extensions.penguinmod.com/extensions/MubiLop/yeetyourfiles.js',
        iconURL: 'https://extensions.penguinmod.com/images/MubiLop/yeetyourfiles.png',
        credits: 'MubiLop',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        featured: true
    },
        {
        name: 'Stage Brah',
        description: 'Spawn Brah cats in your codespace!',
        extensionId: 'https://extensions.penguinmod.com/extensions/electricfuzzball_pm/StageBrah.js',
        iconURL: 'https://extensions.penguinmod.com/images/electricfuzzball_pm/StageBrah.svg',
        credits: 'ElectricFuzzball_PM',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
	{
        name: 'Update File (Direct Access)',
        description: 'A simple extension that uses the File System Access API to update files dynamically.',
        extensionId: 'https://extensions.penguinmod.com/extensions/Anonymous_cat1/updateFile.js',
        iconURL: 'https://extensions.penguinmod.com/images/Anonymous_cat1/updateFile.svg',
        credits: 'Anonymous-cat1',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        featured: true
    },
        {
        name: 'MIDI Controller',
        description: 'Use a MIDI keyboard to interact with projects!',
        extensionId: 'https://extensions.penguinmod.com/extensions/electricfuzzball_pm/MIDI.js',
        iconURL: 'https://extensions.penguinmod.com/images/electricfuzzball_pm/MIDI.svg',
        credits: 'ElectricFuzzball_PM',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
	{
        name: 'oneko',
        description: 'Cute cat that follows you on the block area.',
        extensionId: 'https://extensions.penguinmod.com/extensions/TheShovel/oneko.js',
        iconURL: 'https://extensions.penguinmod.com/images/TheShovel/thumbnail-oneko.avif',
        credits: 'TheShovel',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        featured: true
    },
        {
        name: 'Array Buffers',
        description: 'Read, parse, and write raw data efficiently using Array Buffers',
        extensionId: 'https://extensions.penguinmod.com/extensions/AndrewGaming587/agBuffer.js',
        iconURL: 'https://extensions.penguinmod.com/images/AndrewGaming587/agBuffer.svg',
        credits: 'AndrewGaming587',
		tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
		featured: true
    },
	{
	 name: 'Black Mold',
      description: 'mmmmm black mold',
      extensionId: 'https://extensions.penguinmod.com/extensions/electricfuzzball_pm/blackMold.js',
      iconURL: 'https://extensions.penguinmod.com/images/electricfuzzball_pm/blackMold.svg',
      insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
	  featured: true,
	  credits: 'ElectricFuzzball_PM'
    },
{
        name: 'WebRTC',
        extensionId: 'https://extensions.penguinmod.com/extensions/MikeDev101/webrtc.js',
        tags: ['penguinmod'],
        iconURL: 'https://extensions.penguinmod.com/images/MikeDev101/webrtc.svg',
        insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        description: 'A barebones WebRTC implementation.',
        credits: 'MikeDev101',
        featured: true
    },
{
        name: '3D VR',
        extensionId: 'jg3dVr',
        iconURL: jg3dVrExtensionIcon,
		insetIconURL: jg3dVrInsetExtensionIcon,
        tags: ['penguinmod'],
        description: "Unfinished PenguinMod Extension.",
        extDeveloper: "JeremyGamer13",
        featured: true,
		isBuggy: true
    },
    {
        name: 'PangAI',
        extensionId: 'https://raw.githubusercontent.com/Logise1123/myextensions/refs/heads/main/pangai.js',
        iconURL: 'https://raw.githubusercontent.com/Logise1123/myextensions/refs/heads/main/pangai.png',
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'ai'],
        description: 'Extension for AI usage.',
        credits: 'logise1123',
        internetConnectionRequired: true,
        featured: true
    },
    {
        name: 'Beepbox Player',
        extensionId: 'https://extensions.penguinmod.com/extensions/DogeisCut/BeepBoxPlayer.js',
        iconURL: 'https://extensions.penguinmod.com/images/DogeisCut/BeepBoxPlayer.svg',
        tags: ['penguinmod', 'noisemaker'],
        description: 'Play, edit, and read songs from any BeepBox mod directly from the URL or JSON!',
        extDeveloper: 'DogeisCut',
        featured: true
    },
    {
        name: 'Stage Camera',
        extensionId: 'pmCamera',
        iconURL: pmCameraExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: (
            <FormattedMessage
                defaultMessage="Allows the camera to move around anywhere on the stage."
                description="The description for the PenguinMod Camera extension."
                id="pm.extension.camera.description"
            />
        ),
        credits: 'Inspired by⠀⠀⠀⠀⠀⠀ DT-is-not-available',
        featured: true
    },
	    {
        name: 'Sound Systems',
        extensionId: 'jgExtendedAudio',
        iconURL: jgExtendedAudioExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'categoryexpansion', 'noisemaker'],
        description: 'An audio grouping system for more intensive audio work.',
        featured: true
    },
    {
        name: 'Pang API',
        extensionId: 'https://extensions.penguinmod.com/extensions/SammerLOL/pangapi.js',
        iconURL: 'https://extensions.penguinmod.com/images/SammerLOL/pangapi.avif',
        credits: 'oc9x97',
        tags: ['penguinmod'],
        description: 'Fetch details of projects and users from PenguinMod.',
        featured: true
    },
    {
        name: 'Motion Expansion',
        extensionId: 'pmMotionExpansion',
        iconURL: pmMotionExpansionExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'categoryexpansion'],
        description: 'More small motion blocks for movement or collision.',
        featured: true,
        credits: 'Some blocks from NexusKitten'
    },
    {
        name: 'Events Expansion',
        extensionId: 'pmEventsExpansion',
        iconURL: pmEventsExpansionExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'categoryexpansion'],
        description: 'More events for sending & receiving information, notifing specific sprites or better control when things should happen.',
        featured: true,
        credits: 'Some blocks from LilyMakesThings'
    },
    {
        name: 'Controls Expansion',
        extensionId: 'pmControlsExpansion',
        iconURL: pmControlsExpansionExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'categoryexpansion'],
        description: 'More control blocks for animations, complex systems or cleaner one-time use blocks.',
        featured: true,
        credits: '"new thread" by CubesterYT, CST1229, SharkPool'
    },
    {
        name: 'Sensing Expansion',
        extensionId: 'pmSensingExpansion',
        iconURL: pmSensingExpansionExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'categoryexpansion'],
        description: "More sensing blocks for specific use cases or interacting with the user's device.",
        credits: 'Some blocks from SharkPool-SP',
        featured: true
    },
    {
        name: 'Operators Expansion',
        extensionId: 'pmOperatorsExpansion',
        iconURL: pmOperatorsExpansionExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'categoryexpansion', 'math'],
        description: 'More operators like nand, nor, character code to character, reading multiple lined text line by line, etc.',
        featured: true
    },
    {
        name: 'More Fields',
        extensionId: 'https://extensions.penguinmod.com/extensions/Ashime/MoreFields.js',
        iconURL: 'https://extensions.penguinmod.com/images/0znzw/MoreFields.avif',
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'Custom Field Types',
        extDeveloper: 'yuri-kiss',
        featured: true
    },
    {
        name: 'Tailgating',
        extensionId: 'jgTailgating',
        description: 'Have sprites & clones follow behind other sprites & clones by an offset, like RPG party members.',
        iconURL: jgTailgatingExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        featured: true
    },
    {
        name: 'Canvas Effects',
        extensionId: 'theshovelcanvaseffects',
        iconURL: theshovelCanvasEffectsIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'graphics'],
        description: 'Apply visual effects to the entire stage.',
        extDeveloper: 'TheShovel',
        credits: 'SharkPool',
        featured: true
    },
    {
        name: 'Text to Speech Redone',
        extensionId: 'https://extensions.penguinmod.com/extensions/PuzzlingGGG/ttsr.js',
        twDeveloper: 'PuzzlingGGG',
        iconURL: 'https://extensions.penguinmod.com/images/PuzzlingGGG/TTSR.avif',
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'A better alternitive to the base text to speech extension. Powered by the TTStool API.',
        internetConnectionRequired: true,
        featured: true
    },
    {
        name: 'Multiple Timers',
        extensionId: 'jgTimers',
        iconURL: jgTimersExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'Create different timers you can control seperately.',
        eventSubmittor: 'Arrow',
        featured: true
    },
    {
        name: 'Temporary Variables',
        extensionId: 'tempVars',
        iconURL: gsaTempVariablesExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'Create temporary variables for use in one block stack.',
        featured: true
    },
		{
        name: 'Toast Notifications',
        extensionId: 'https://extensions.penguinmod.com/extensions/MubiLop/toastnotifs.js',
        tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        iconURL: 'https://extensions.penguinmod.com/images/MubiLop/toastnotifs.avif',
        description: 'Did you want alerts? Notifications that are easily customizable? This is the only and best notification extension!',
        credits: 'MubiLop, with additional code by themeatly2 and ddededodediamante',
        featured: true
    },
	{
        name: 'Project Interfaces',
        extensionId: 'https://extensions.penguinmod.com/extensions/LordCat0/ProjectInterfaces.js',
        iconURL: 'https://extensions.penguinmod.com/images/LordCat0/ProjectInterfaces.avif',
		credits: 'Lord cat',
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'Effortlessly create intuitive graphical user interfaces in your projects.',
        featured: true
    },
	{
        name: 'Git Penguin',
        extensionId: 'https://extensions.penguinmod.com/extensions/justablock/gitpenguin.js',
        iconURL: 'https://extensions.penguinmod.com/images/justablock/gitpenguin.avif',
		credits: ' justablock',
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'Make requests and control the files for your GitHub repository.',
        featured: true
    },
    {
        name: 'AuthPenguin',
        extensionId: 'https://extensions.penguinmod.com/extensions/MubiLop/authpenguin.js',
        tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        iconURL: 'https://extensions.penguinmod.com/images/MubiLop/authpenguin.avif',
        description: 'Authenticate with anything and everything!',
        credits: 'MubiLop',
        featured: true
    },
	{
        name: 'Date Format',
        description: 'Manage, format and compare dates.',
        extensionId: 'https://extensions.penguinmod.com/extensions/ddededodediamante/dateFormatV2.js',
        iconURL: 'https://extensions.penguinmod.com/images/ddededodediamante/dateFormat.svg',
        credits: 'ddededodediamante',
        insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        featured: true
    },
    {
        name: 'Translation Keys',
        description: 'Use translation keys in your projects for multi-language support',
        extensionId: 'https://extensions.penguinmod.com/extensions/Embin/embintranslation.js',
        iconURL: 'https://extensions.penguinmod.com/images/Embin/embintranslation.avif',
        credits: 'embinmc',
        insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
		featured: true
    },
    {
        name: 'Yet Another String Extension',
        description: 'A small collection of utilty blocks intended to make managing strings much, much easier.',
        extensionId: 'https://extensions.penguinmod.com/extensions/DogeisCut/YetAnotherStringExtension.js',
        iconURL: 'https://extensions.penguinmod.com/images/DogeisCut/YetAnotherStringExtension.svg',
        credits: 'DogeisCut',
        insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
		featured: true
    },
    {
        name: 'Regular Expressions',
        description: 'Create, modify, filter, and more with the new regular expression type.',
        extensionId: 'https://extensions.penguinmod.com/extensions/DogeisCut/dogeiscutRegularExpressions.js',
        iconURL: 'https://extensions.penguinmod.com/images/DogeisCut/dogeiscutRegularExpressions.svg',
        credits: 'DogeisCut',
        insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
		featured: true
    },
    {
        name: 'Sets',
        description: 'Store non-repeating, unordered data super efficiently in sets.',
        extensionId: 'https://extensions.penguinmod.com/extensions/DogeisCut/dogeiscutSet.js',
        iconURL: 'https://extensions.penguinmod.com/images/DogeisCut/dogeiscutSet.svg',
        credits: 'DogeisCut',
        insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
		featured: true
    },
	    {
        name: 'PenguinHook',
        description: 'Send Webhook requests, that can be Discord or any type of webhook.',
        extensionId: 'https://extensions.penguinmod.com/extensions/MubiLop/penguinhook.js',
        iconURL: 'https://extensions.penguinmod.com/images/MubiLop/penguinhook.avif',
        credits: 'MubiLop',
        insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
		featured: true
    },
    {
        name: 'Number Utilities',
        description: 'Adds blocks for number formatting and manipulation.',
        extensionId: 'https://extensions.penguinmod.com/extensions/MubiLop/numutils.js',
        iconURL: 'https://extensions.penguinmod.com/images/MubiLop/numutils.avif',
        credits: 'MubiLop',
        insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
		featured: true
    },
    {
        name: 'Mathematics',
        description: 'Complicated maths extension for nerds.',
        extensionId: 'https://extensions.penguinmod.com/extensions/jwklong/mathematics.js',
        iconURL: 'https://extensions.penguinmod.com/images/jwklong/mathematics.avif',
        credits: 'jwklong',
        insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
		featured: true
    },
    {
        name: 'Big Decimal',
        description: 'High precision operations. (Support decimals)',
        extensionId: 'https://extensions.penguinmod.com/extensions/qxsck/big-decimal.js',
        iconURL: 'https://extensions.penguinmod.com/images/qxsck/big-decimal.svg',
        credits: 'qxsck',
        insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
		featured: true
    },
    {
        name: 'Iterators',
        description: 'Transform and iterate over different types of collections and more.',
        extensionId: 'https://extensions.penguinmod.com/extensions/Div/divIterators.js',
        iconURL: 'https://extensions.penguinmod.com/images/Div/divIterators.svg',
        credits: 'Dicuo',
        insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
		featured: true
    },
    {
        name: 'Algebraic Effects',
        description: 'Intercept custom actions in your scripts to pause, resume, or redirect their flow using modular handlers.',
        extensionId: 'https://extensions.penguinmod.com/extensions/Div/divAlgEffects.js',
        iconURL: 'https://extensions.penguinmod.com/images/Div/divAlgEffects.svg',
        credits: 'Dicuo',
        insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
		featured: true
    },
    {
        name: 'Runtime Modifications',
        extensionId: 'jgRuntime',
        tags: ['penguinmod'],
        iconURL: jgRuntimeExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        description: 'Blocks for updating Scratch objects like the stage and sprites.',
        credits: 'TheShovel, showierdata9978, SharkPool',
        featured: true
    },
    {
        name: 'Storage',
        extensionId: 'jgStorage',
        iconURL: jgStorageExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'datamgmt'],
        description: 'Store data after PenguinMod has already been closed out. Basic Server Storage is also included.',
        eventSubmittor: 'Fir & silvxrcat',
        featured: true
    },
    {
        name: 'Scripts',
        extensionId: 'jgScripts',
        iconURL: jgScriptsExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'datamgmt'],
        description: 'Create compiled scripts with blocks while the project is running.',
        featured: true
    },
    {
        name: '3D Math',
        extensionId: 'https://extensions.penguinmod.com/extensions/ObviousAlexC/3DMath.js',
        iconURL: 'https://extensions.penguinmod.com/images/ObviousAlexC/3DMath.svg',
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', '3d', 'graphics', 'math'],
        description: 'A handful of utilities for making your own sprite-based 3D engine.',
        extDeveloper: 'pinksheep2917',
        featured: true
    },
        {
        name: 'TurboWeather',
        extensionId: 'https://extensions.penguinmod.com/extensions/RubyDevs/turboweather.js',
        extDeveloper: 'RubyDevs',
        description: 'Show weather and location data for any place in our world. Data that could be used for doxxing is deleted from results.',
        iconURL: turboWeatherIcon,
        tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        featured: true
    },
    {
        name: 'Random Utilities',
        extensionId: 'https://extensions.penguinmod.com/extensions/Gen1x/random_utils.js',
        iconURL: 'https://extensions.penguinmod.com/images/Gen1x/randomutils.avif',
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'Many blocks related to generating random values, including seed-based number generation, true number generation, UUID\'s, random strings, etc.',
        extDeveloper: 'G1nX',
        featured: true
    },
    {
        name: 'LZ Compress',
        extensionId: 'shovellzcompresss',
        iconURL: theshovelLzCompressIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'datamgmt'],
        description: 'Compress and decompress text using lz-string.',
        extDeveloper: 'TheShovel',
        featured: true
    },
    {
        name: 'Odd Messages',
        extensionId: 'oddMessage',
        tags: ['penguinmod'],
        iconURL: silvxrcatOddMessagesExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        description: 'For logging and variable utilization.',
        featured: true,
        extDeveloper: 'silvxrcat'
    },
    {
        name: 'Prism',
        extensionId: 'jgPrism',
        tags: ['penguinmod', 'datamgmt'],
        iconURL: jgPrismExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        description: 'Blocks for specific use-cases or major convenience.',
        featured: true
    },
    {
        name: 'HTML iframe Elements',
        extensionId: 'jgIframe',
        iconURL: jgIframeExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'Blocks to place and move around frames that contain HTML content or websites.',
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Color Picker',
        extensionId: 'shovelColorPicker',
        iconURL: theshovelColorPickerIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'Allow the user to choose a color using the built-in color picker, so you don\'t need to make your own.',
        extDeveloper: 'TheShovel',
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Labels"
                description="Name of Proto extension"
                id="jwProto.jwProtoExtension.name"
            />
        ),
        extensionId: 'jwProto',
        iconURL: jwProtoExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: (
            <FormattedMessage
                // change this back if you update the extension to have more things
                defaultMessage="Labelling and Placeholders."
                description="Description of Proto extension"
                id="jwProto.jwProtoExtension.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Perlin Noise"
                description="Name of perlin noise extension"
                id="iygPerlin.iygPerlinExtension.name"
            />
        ),
        extensionId: 'iygPerlin',
        tags: ['penguinmod'],
        iconURL: iygPerlinNoiseExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        description: (
            <FormattedMessage
                defaultMessage="Blocks for generating and using Perlin noise. Good for generating terrain, clouds, and other things."
                description="Description of perlin noise extension"
                id="iygPerlin.iygPerlinExtension.description"
            />
        ),
        featured: true
    },
    {
        name: 'Printing',
        tags: ['penguinmod', 'hardware'],
        extensionId: 'sharkpoolPrinting',
        iconURL: sharkpoolPrintingIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        description: 'Allows you to show a dialog for printing text, images, and custom HTML to a printer.',
        featured: true
    },
    {
        name: 'Scratch Authentication',
        extensionId: 'jgScratchAuthenticate',
        iconURL: jgScratchAuthExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: "Interact with Scratch Authentication to prove the player is a real scratch user.",
        featured: true
    },
   {
        name: 'JavaScript',
        extensionId: 'SPjavascriptV2',
        iconURL: jgJavascriptExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'programminglanguage'],
        description: 'Run your own custom code written in JavaScript!',
        featured: true
    },
{
        name: 'Arrays',
        extensionId: 'jwArray',
        iconURL: jwArrayExtensionThumb,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'datamgmt'],
        description: 'Store data efficiently in multi-purpose arrays.',
        extDeveloper: 'jwklong',
        featured: true
    },
    {
        name: 'Objects',
        extensionId: 'https://extensions.penguinmod.com/extensions/DogeisCut/dogeiscutObject.js',
        iconURL: 'https://extensions.penguinmod.com/images/DogeisCut/dogeiscutObject.svg',
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'datamgmt'],
        description: 'Store data efficiently in multi-purpose objects.',
        extDeveloper: 'DogeisCut',
        featured: true
    },
    {
        name: 'XML',
        extensionId: 'jwXML',
        iconURL: jwXMLExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'datamgmt'],
        description: 'Creating, parsing and modifying XML data.',
        extDeveloper: 'jwklong',
        featured: true
    },
    {
        name: 'Targets',
        extensionId: 'jwTargets',
        iconURL: jwTargetsExtensionThumb,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'Direct access to sprites and their clones.',
        extDeveloper: 'jwklong',
        featured: true
    },
    {
        name: 'Infinity',
        extensionId: 'jwNum',
        iconURL: jwNumExtensionThumb,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'math'],
        description: 'Advanced number type capable of really big numbers.',
        extDeveloper: 'jwklong',
        credits: 'Naruyoko for ExpantaNum.js',
        featured: true
    },
    {
        name: 'Color',
        extensionId: 'jwColor',
        iconURL: jwColorExtensionThumb,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'graphics'],
        description: 'Utilities for anything involving colors.',
        extDeveloper: 'jwklong',
        featured: true
    },
    {
        name: 'Vector',
        extensionId: 'jwVector',
        iconURL: jwVectorExtensionThumb,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'math'],
        description: 'Vector type for calculating with X and Y coordinates.',
        extDeveloper: 'jwklong',
        featured: true
    },
    {
        name: 'Lambda',
        extensionId: 'jwLambda',
        iconURL: jwLambdaExtensionThumb,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'Create anonymous functions with arguments and execute them.',
        extDeveloper: 'jwklong',
        featured: true
    },
    {
        name: 'Scope',
        extensionId: 'jwScope',
        iconURL: jwScopeExtensionThumb,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'Temporary variables based on block stack. (extra blocks if used with Array extension)',
        extDeveloper: 'jwklong',
        featured: true
    },
    {
        name: 'Pointers',
        extensionId: 'jwPointer',
        iconURL: jwPointerExtensionThumb,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'datamgmt'],
        description: 'Define references to values. (extra blocks if used with Array extension)',
        extDeveloper: 'jwklong',
        featured: true
    },
    {
        name: 'Integers',
        extensionId: 'jwInt',
        iconURL: jwIntExtensionThumb,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'math'],
        description: 'Large integers with zero precision loss.',
        extDeveloper: 'jwklong',
        featured: true
    },
    {
            name: 'Unsandboxed Detector',
            extensionId: 'https://ldsjvg.webwave.dev/lib/ldsjvg/jmunsandboxdetect-lwcbhcjw.js',
            iconURL: 'https://ldsjvg.webwave.dev/files/dynamicContent/sites/ldsjvg/images/pl/webpage_20/lwcfkkaq/element_437/rwdMode_1/574x139/block_18052024-18_19_55.webp',
            extDeveloper: 'julmik6478',
            insetIconURL: penguinmodIcon,
            tags: ['penguinmod'],
			customInsetColor: '#00c3ff',
            description: 'Detect that extension is run in sandbox or without sandbox',
            featured: true
        },
        {
            name: 'Easy Save',
            extensionId: 'jgEasySave',
            iconURL: defaultExtensionIcon,
			insetIconURL: penguinmodIcon,
			customInsetColor: '#00c3ff',
            tags: ['penguinmod', 'datamgmt'],
            description: 'Save variables, lists and extra info to a file, then load those things back in.',
            featured: true
        },
 {
            name: 'Christmas',
            extensionId: 'jgChristmas',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/christmas.avif',
			insetIconURL: penguinmodIcon,
			customInsetColor: '#00c3ff',
            tags: ['penguinmod', 'jokes'],
            description: 'It\'s not Christmas just yet!',
            featured: true
        },
        {
            name: 'CATS',
            extensionId: 'https://extensions.penguinmod.com/extensions/Gen1x/CATS.js',
            iconURL: catsThumb,
			insetIconURL: penguinmodIcon,
			customInsetColor: '#00c3ff',
            tags: ['penguinmod', 'jokes'],
            description: 'Blocks related to cats.',
            extDeveloper: 'G1nX',
            featured: true
        },
	    {
        name: 'CCW Extension Loader',
        extensionId: 'ccw_extension_loader',
        iconURL: 'https://extensions.02engine.02studio.xyz/image/ccw.svg',
        description: 'Load extensions from Cocrea World.',
        featured: true
    },
    {
        name: 'JSON',
        extensionId: 'jgJSON',
        iconURL: jgJSONExtensionIcon,
        tags: ['penguinmod', 'datamgmt'],
        description: 'Blocks for handling JSON objects and Arrays.',
        featured: true
    },
    {
        name: 'Color Utility Blocks',
        extensionId: 'colors',
        iconURL: gsaColorUtilExtensionIcon,
        tags: ['penguinmod'],
        description: 'Converters for Hex, RGB, HSV and Decimal colors and other color related things.',
        featured: true
    },
    {
        name: 'Extra Mathematics',
        extensionId: 'https://extensions.penguinmod.com/extensions/jwklong/mathematics.js',
        iconURL: 'https://extensions.penguinmod.com/images/jwklong/mathematics.avif',
        tags: ['penguinmod', 'categoryexpansion', 'math'],
        description: 'Complicated maths extension for nerds.',
        extDeveloper: 'jwklong',
        featured: false
    },
	{
	  name: 'Sharktilities',
      description: 'Various utility blocks for various operations',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Sharktilities.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Sharktilities.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
      name: 'YouTube-Operations',
      description: 'Fetch and play Youtube videos and statistics in your Project',
      credits: 'SharkPool, Nekl300 (contributor)',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/YouTube-Operations.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/YouTube-Operations.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Scratch-Utilities',
      description: 'Blocks for fetching Scratch statistics and assets, inspired by NexusKitten\'s S-Grab. Can even fetch cloud data from projects!',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Scratch-Utilities.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Scratch-Utilities.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Tune-Shark-V3',
      description: 'Advanced Audio Engine with complex Sound Control, Audio Effects and more',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Tune-Shark-V3.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Tune-Shark-V3.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Tune-Shark',
      description: 'Outdated Sound Engine for playing sounds. Please use Tune Shark V3',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Tune-Shark.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Tune-Shark.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Camera',
      description: 'Use Cameras to move the visible part of the Stage',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Camera.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Camera.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Added-Motion',
      description: 'New Motion Blocks',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Added-Motion.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Added-Motion.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Geometry-Dash-API',
      description: 'Fetch statistics and information from Geometry Dash. Deprecated, expect incorrect values.',
      credits: 'SharkPool, thank you RobTopGames and GD Colon',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Geometry-Dash-API.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Geometry-Dash-API.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Sound-Waves',
      description: 'Play various Oscillators in your Project',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Sound-Waves.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Sound-Waves.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Hyper-Sense',
      description: 'New Sensing Blocks',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Hyper-Sense-V2.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Hyper-Sense.svg',
      tags: ['sharkpool'],
	  featured: true
    },
    {
	  name: 'Keys-Plus-V2',
      description: 'Powerful and flexible Key detection Blocks with some additional features (No longer maintained)',
      credits: 'StackOverflow',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/KeysPlusV2.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Keys-Plus-V2.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Popup-Phoenix',
      description: 'Create and design custom Popups! A remaster of \'Better Input\'',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Better-Input.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Popup-Phoenix.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Better-Input',
      description: 'Expansion of the \'Ask and Wait\' Block. Deprecated, please use Popup-Phoenix',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Camera-Sensing-Plus.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Better-Input.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Camera-Sensing-Plus',
      description: 'Expansion of the \'Video Sensing\' extension. Display the Camera on Sprites and take Photos',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Camera-Sensing-Plus.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Camera-Sensing-Plus.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Particle-Engine',
      description: 'Create customizable and powerful Particle Engines with NO Clones',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Particle-Engine.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Particle-Engine.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Particle-Tools',
      description: 'Tools that make creating Particle Systems easy',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Particle-Tools.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Particle-Tools.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
   {
	  name: 'Looks-Expanded',
      description: 'Expansion of the Looks Category',
      credits: 'SharkPool, CST1229',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Looks-Expanded.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Looks-Expanded.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Sprite-Effects',
      description: 'Apply SVG Filters to Images, Sprites, and the Canvas! Faster than Image Effects',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Sprite-Effects-V2.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Sprite-Effects.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Image-Effects',
      description: 'Apply Effects and Filters to Images',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Image-Effects.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Image-Effects.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Image-Editor',
      description: 'Create and modify images and their pixel data',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Image-Editor.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Image-Editor.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Pixel-Utilities',
      description: 'Some Utility Blocks that Roltycore 2\'s Developer made for some reason',
      credits: 'LittleBlueGamer',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Pixel-Utilities.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Pixel-Utilities.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Recording',
      description: 'Blocks for Recording your Microphone while your Project runs',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Recording-V2.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Recording.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Newgrounds-Audio',
      description: 'Fetch Audio and Audio Information from Newgrounds. Works best with Tune Shark V3',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Newgrounds-Audio.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Newgrounds-Audio.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Sprite-Parenting',
      description: 'Link Sprites together and make them follow their parent\'s movement',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Sprite-Parenting.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Sprite-Parenting.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Rigidbodies',
      description: 'Fast, math-based Collision detections using Rigidbodies',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Rigidbodies.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Rigidbodies.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Lazy-Collisions',
      description: 'Utility Blocks that make detecting box Collisions easy and fast',
      credits: 'SharkPool, Food (contributor)',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Lazy-Collisions.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Lazy-Collisions.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Files-Expanded',
      description: 'Expansion of GarboMuffin\'s File Extension',
      credits: 'SharkPool, Drago Cuven, 0znzw',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Files-Expanded.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Files-Expanded.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Temporary-Variables',
      description: 'Create Temporary Variables for Sprites, Threads, and the Project',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Temporary-Variables.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Temporary-Variables.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Variables-Expanded',
      description: 'New Variable Blocks and New Variable Monitors',
      credits: 'SharkPool, DogeIsCut',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Variables-Expanded.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Variables-Expanded.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Sty-Lists',
      description: 'Customize and Organize List Monitors',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Sty-Lists.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Sty-Lists.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Gamepad-Expanded',
      description: 'Expansion of Garbomuffin\'s Gamepad Extension',
      credits: 'DNin01, Meehdrescher',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Gamepad-Expanded.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Gamepad-Expanded.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Tile-Grids',
      description: 'Position Sprites on Tile Grids',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Tile-Grids.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Tile-Grids.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Animations',
      description: 'Create Animations and Keyframes in your Project',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Animations.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Animations.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Text-to-Speech',
      description: 'Better Text to Speech using the TikTok API',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Text-to-Speech.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Text-to-Speech.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Font-Manager',
      description: 'Manage, Create, and Delete Fonts from your Project',
      credits: 'SharkPool, 0znzw',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Font-Manager.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Font-Manager.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Pause-Utilities',
      description: 'Pause your Project, Scripts, and Sprites',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Pause-Utilities.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Pause-Utilities.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Script-Control',
      description: 'Monitor and Control specific Scripts in your Project, inspired by 0znzw',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Script-Control.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Script-Control.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Messages-Plus',
      description: 'Powerful New Message Blocks that work with Vanilla Messages',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Messages-Plus.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Messages-Plus.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Advanced-Messages',
      description: 'New Message Blocks for Advanced, Non-Vanilla Purposes',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Advanced-Messages.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Advanced-Messages.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Events-Plus',
      description: 'New Event Blocks',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Events-Plus.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Events-Plus.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Runtime-Events',
      description: 'Detect Events from Runtime',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Runtime-Events.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Runtime-Events.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Fetch-Plus',
      description: 'Fetch and Encode Content from URLs while viewing the Progress and Status of the Fetch',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Fetch-Progress.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Fetch-Plus.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Geolocation sharkpool',
      description: 'Get users\' Location and calculate Real-World Distances',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Geolocation.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Geolocation.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Spotify',
      description: 'Fetch Statistics, Information, and Play Songs from Spotify',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Spotify.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Spotify.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'SoundCloud-API',
      description: 'Fetch Tracks, Artists, and Statistics from Soundcloud',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/SoundCloud-API.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/SoundCloud-API.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Google-Spreadsheets',
      description: 'Read and Write Google Spreadsheets',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Google-Spreadsheets.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Google-Spreadsheets.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Money-Utilities',
      description: 'Convert Currencies and get Currency Information',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Money-Utilities.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Money-Utilities.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Display-Text',
      description: 'Display Text in your Projects, with Markdown Support',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Display-Text-V2.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Display-Text.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Color-Master',
      description: 'Color Utility and Conversion Blocks',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Color-Master.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Color-Master.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'QR-Codes',
      description: 'Create and Read QR Codes on the Client',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/QR-Codes.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/QR-Codes.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Speech-Bubbles',
      description: 'Customizable Speech Bubbles',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Speech-Bubbles.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Speech-Bubbles.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Layer-Control',
      description: 'Relayer Pen, Video Camera, Backdrops, Sprites and more',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Layer-Control.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Layer-Control.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Renderer-Control',
      description: 'Control the visuals of Pen, Video Camera, Backdrops, Sprites and more',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Renderer-Control.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Renderer-Control.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Time-Calculation',
      description: 'Blocks for calculating Time differences',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Time-Calculation.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Time-Calculation.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Timezones',
      description: 'Convert and get the Time in different Timezones',
      credits: 'Ammunimium',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Timezones.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Timezones.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Since-2000',
      description: 'Expansion of the \'since 2000\' Blocks',
      credits: 'Ammunimium, 0znzw',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Since-2000.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Since-2000.svg',
      'status': '',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Seeds',
      description: 'Generate random seeded numbers, generated terrain, and more',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Seeds.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Seeds.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Perlin-Noise',
      description: 'Generate randomized Perlin Noise',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Perlin-Noise.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Perlin-Noise.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Extra-Controls',
      description: 'New Advanced Control Blocks',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Extra-Controls.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Extra-Controls.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'More-Operators',
      description: 'New Powerful Operator Blocks',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/More-Operators.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/More-Operators.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Captchas',
      description: 'Simple Client-Based Captchas, this does not promise 100% security',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Captchas.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Captchas.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Better-Comments',
      description: 'Better Comments with Color and Text Customization',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Better-Comments.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Better-Comments.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Sprite-Panel',
      description: 'Addon for viewing and managing Sprites and Clones',
      credits: 'SharkPool, FurryR',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Sprite-Panel.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Sprite-Panel.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'DOM-Selector',
      description: 'Read Elements and Create Events from the website HTML',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/DOM-Selector.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/DOM-Selector.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'SVG-Spritesheets',
      description: 'Create and Export SVG Spritesheets',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/SVG-Spritesheets.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/SVG-Spritesheets.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Community-Spotlight',
      description: 'Display and Promote Projects for free',
      credits: 'SharkPool, Community Spotlight Team',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Community-Spotlight.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Community-Spotlight.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'GIF-Manager',
      description: 'Create and Split GIF Frames',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/GIF-Manager.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/GIF-Manager.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Swift-JSON',
      description: 'Super Fast JSON and Array extension',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/JSON-Array.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/JSON-Array.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'My-Blocks-Plus',
      description: 'Better Custom Blocks',
      credits: 'SharkPool, CST1229, 0znzw',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/My-Blocks-Plus.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/My-Blocks-Plus.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Dropdown-Maker',
      description: 'Create Custom Dropdowns! Best paired with My Blocks+',
      credits: 'SharkPool, CST1229, 0znzw',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Dropdown-Maker.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Dropdown-Maker.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Turbo-Skins',
      description: 'Improved Skins extension, inspired by LilyMakesThings',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Turbo-Skins.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Turbo-Skins.svg',
      tags: ['sharkpool'],
	  extraLabels: [
            {
                name: "Inspired by",
                value: "\"Skins\" by LilyMakesThings"
            }
        ],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Scenes',
      description: 'Create Scenes (savestates), like Unity, in your Project',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Scenes.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Scenes.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Pen-Papers',
      description: 'Create Multiple Pen Layers! Inspired by ObviousAlex',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Pen-Papers.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Pen-Papers.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'MIDI-Tools',
      description: 'Utilities For Making Midi Notes Into Functions',
      credits: 'ObscuraPH',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/MIDI-Tools.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/MIDI-Tools.svg',
      tags: ['sharkpool'],
	  featured: true
	},
	{
        name: 'App Utilities',
        extensionId: 'appmaker',
        iconURL: appMakerIconURL,
		insetIconURL: appMakerInsetIconURL,
        credits: 'LibreKitten',
        tags: ['othermods'],
        description: 'Develop apps in GaiaMod.',
        featured: true
    },
    {
        name: 'Files',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Files-Expanded.js',
        extDeveloper: 'SharkPool',
        iconURL: filesExtensionIcon,
        tags: ['turbowarp', 'datamgmt'],
        description: 'Blocks for reading, editing, & creating files & folders.',
        featured: true
    },
	{
        name: 'Miku Hatsune Block',
        extensionId: 'https://m.ccw.site/user_projects_assets/c5eb4c7b755a7b739e6699b72e281194.js',
        iconURL: 'https://m.ccw.site/works-covers/50973288-24ef-4017-b0c4-44541deac7ad.PNG',
        credits: 'Lumi',
        tags: ['othermods'],
		insetIconURL: ccwIcon,
        description: 'Opens a Miku link.',
        featured: true
    },
	{
        name: 'Smart Lumies',
        extensionId: 'smartLumies',
        collaborator: 'PlusPlus',
        iconURL: smartLumiesIconURL,
        insetIconURL: smartLumiesInsetIconURL,
        description: 'Have fun with Smart Lumies Cube in GaiaMod!',
		tags: ['othermods', 'iot'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: smartLumiesConnectionIconURL,
        connectionSmallIconURL: smartLumiesConnectionSmallIconURL,
        connectionTipIconURL: smartLumiesConnectionTipIconURL,
        connectingMessage: 'Have your Cube nearby.',
        helpLink: 'https://smartlumies.com'
    },
	{
        name: 'Magic Blue UU',
        extensionId: 'magicBlueUU',
        collaborator: 'PlusPlus',
        iconURL: magicBlueUUIconURL,
        insetIconURL: magicBlueUUInsetIconURL,
		tags: ['othermods', 'hardware', 'iot'],
        description: (
            <FormattedMessage
                defaultMessage='Magic Blue UU extension.'
                description='Description for the Magic Blue UU extension'
                id='gui.extension.magicBlueUU.description'
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectingMessage: (
            <FormattedMessage
                defaultMessage='Connecting'
                description='Have your Magic Blue UU nearby.'
                id='gui.extension.magicBlueUU.connectingMessage'
            />
        )
    },
	{
        name: 'Kobold AI',
        extensionId: 'https://p7scratchextensions.pages.dev/ext/KoboldAI/main.js',
        extDeveloper: 'Pooiod7',
        description: 'Generate text and images for free with the power of The Horde',
        iconURL: 'https://p7scratchextensions.pages.dev/ext/KoboldAI/cover.svg',
        tags: ['othermods', 'ai'],
        internetConnectionRequired: true,
        featured: true
    },
	{
        name: 'Extension Management',
        extensionId: 'https://m.ccw.site/user_projects_assets/24420f3b76f6558800327563e5dcce9c.js',
        iconURL: 'https://m.ccw.site/works-covers/d117e69e-dad0-4390-b86c-0056a4992836.png',
        credits: 'Unknown',
        tags: ['othermods'],
		insetIconURL: ccwIcon,
        description: 'Manages extensions.',
        featured: true
	},
    {
        name: 'Randomly Blocks',
        extensionId: 'https://snail-ide.js.org/randomlyBlocks.js',
        collaborator: 'mariocraft987',
        iconURL: randomlyBlocksIcon,
        tags: ['othermods', 'snailide'],
		insetIconURL: snailideIcon,
        description: 'Utilitys to have your project feel like a website',
        featured: true
	},
    {
        name: 'Blockly2Math',
        extensionId: 'blockly2math',
        iconURL: blocklyIconURL,
        collaborator: 'Google',
        tags: ['snailide'],
		insetIconURL: snailideIcon,
        description: "Blockly math blocks.",
        featured: true
	},
    {
        name: 'TypeScript',
        extensionId: 'typescratch',
        iconURL: typescriptIcon,
        tags: ['snailide', 'programminglanguage', 'othermods'],
		insetIconURL: snailideIcon,
        description: "Similar to the JavaScript extension but for TypeScript",
        featured: true
    },
	{
        name: 'Ohbot',
        extensionId: 'ohbot',
        iconURL: ohbotIconURL,
        insetIconURL: ohbotInsetIconURL,
		credits: 'Ohbot',
		tags: ['othermods', 'hardware', 'iot'],
        description: 'Control your Ohbot',
        featured: true
    },
	{
        name: 'Marty the Robot',
        extensionId: 'marty',
        collaborator: 'Robotical',
        iconURL: 'https://scratch3beta.robotical.io/static/assets/f1f767c70b08089a3940f35ebfdc315e.png',
        insetIconURL: 'https://scratch3beta.robotical.io/static/assets/825efb8616528b0a1ed8fe7d6f325408.svg',
        description: 'Play and program with Marty.',
        tags: ['othermods', 'hardware', 'iot'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: true
	},
	{
        name: 'Cozmo',
        extensionId: 'cozmo',
        tags: ['cognimates', 'othermods'],
		isNew: false,
        iconURL: require('../extensions/cognimates/cozmo-ext.png'),
		insetIconURL: require('../extensions/cognimates/cozmo-small.jpg'),
		customInsetColor: '#FFFFFF',
		collaborator: 'Anki',
        description: 'Play with Cozmo in PotentiaMod.',
        featured: true,
        incompatibleWithScratch: true
    },
	{
        name: 'Tinkibot',
        extensionId: 'tinkibot',
		tags: ['othermods'],
		isNew: false,
        iconURL: require('../extensions/tinkibot/tinkibot.png'),
		insetIconURL: require('../extensions/tinkibot/tinkimo-small.png'),
		customInsetColor: '#FFFFFF',
		collaborator: 'Tinkimo',
        description: 'Control one or more Tinkibots',
        featured: true,
        internetConnectionRequired: false,
        incompatibleWithScratch: true
    },
  {
    name: 'Google Maps',
    extensionId: "googleMap",
    collaborator: "Champierre, TYiC",
	tags: ['othermods'],
	isNew: false,
	iconURL: require('../extensions/googleMap/googleMap.png'),
	insetIconURL: require('../extensions/googleMap/googleMap-small.png'),
    description: 'Display geographic location using the latitude and longitude coordinates (Experimental).',
    featured: true,
    disabled: false,
    internetConnectionRequired: true,
    useAutoScan: false,
    helpLink: "https://github.com/estea8968/scratch3-internet",
        incompatibleWithScratch: true
  },
	{
        name: 'Ruby',
        extensionId: 'ruby',
        tags: ['othermods'],
		isNew: false,
        iconURL: require('../extensions/smalruby-ruby/smalruby-ruby.svg'),
	    insetIconURL: require('../extensions/smalruby-ruby/smalruby-ruby-small.svg'),
		collaborator: 'SmallRuby',
        description: 'Use Ruby methods in PotentiaMod.',
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        incompatibleWithScratch: true
    },
	{
        name: 'Alexa',
        extensionId: 'alexa',
        tags: ['cognimates', 'othermods'],
		isNew: false,
        iconURL: require('../extensions/cognimates/Alexa_extension.png'),
		collaborator: 'Amazon',
        description: 'Talk to Alexa in PotentiaMod.',
        featured: true,
        incompatibleWithScratch: true
    },
  {
    name:'Google Sheets',
    extensionId: "rwGoogle",
    collaborator: "estea chen, TYiC",
	tags: ['othermods'],
	isNew: false,
    iconURL: require('../extensions/rwgoogle/rwgoogle.png'),
	insetIconURL: require('../extensions/rwgoogle/clound-small.png'),
    description: 'Read and write Google Sheets and Google Forms.',
    featured: true,
    disabled: false,
    // bluetoothRequired: false,
    internetConnectionRequired: true,
    // launchPeripheralConnectionFlow: false,
    useAutoScan: false,
    helpLink: "https://github.com/estea8968/scratch3-internet",
        incompatibleWithScratch: true
  },
	{
        name: 'QR Code',
        extensionId: 'qrcode',
        tags: ['othermods'],
		isNew: false,
        collaborator: 'Sugiura Lab',
        iconURL: require('../extensions/qrcode/qrcode.png'),
		insetIconURL: require('../extensions/qrcode/qrcode-small.svg'),
		description: 'Scans things with a QR Code extension.',
        featured: true,
        disabled: false,
        internetConnectionRequired: false,
        bluetoothRequired: false,
        incompatibleWithScratch: true
    },
	{
    name: "LineNotify",
    extensionId: "linenotify",
    collaborator: "estea chen",
	tags: ['othermods'],
	isNew: false,
    iconURL: require('../extensions/linenotify/linenotify.svg'),
	insetIconURL: require('../extensions/linenotify/linenotify_small.svg'),
    description: "Use Line Notify to send messages.",
    featured: true,
    disabled: false,
    internetConnectionRequired: true,
    bluetoothRequired: false,
    incompatibleWithScratch: true
  },
	{
        name: 'KidsBoard',
        extensionId: 'kidsboard',
        collaborator: 'Nekoma Manufacturing',
        iconURL: require('../extensions/kidsboard/kidsboard.svg'),
	    insetIconURL: require('../extensions/kidsboard/kidsboard-small.svg'),
		tags: ['othermods'],
		isNew: false,
        description: 'Connect KidsBoard via Bluetooth to operate the LEDs, buttons, speaker, and sensors.',
        featured: true,
        bluetoothRequired: true,
        incompatibleWithScratch: true
    },
	{
        name: 'EIM Messaging',
        extensionId: 'eim',
        iconURL: require('../extensions/eim/illustration.jpg'),
		insetIconURL: require('../extensions/eim/small.svg'),
        tags: ['othermods'],
		isNew: false,
		collaborator: 'CodeLab',
        description: 'Everything is a mesage! Contains capabilities of all the other extensions.',
        featured: true,
        incompatibleWithScratch: true
    }, 
	{
        name: 'Face Emotion Sensing',
        extensionId: 'poseFace',
        tags: ['othermods'],
		isNew: false,
        iconURL: require('../extensions/poseFace/pose-face.png'),
		insetIconURL: require('../extensions/poseFace/pose-face-small.svg'),
		collaborator: 'Raise Playground',
        description: 'Sense face movement with the camera with added emotion detection.',
        featured: true,
        incompatibleWithScratch: true
    },
	{
        name: 'Body Sensing',
        extensionId: 'poseBody',
        tags: ['othermods'],
		isNew: false,
        iconURL: require('../extensions/poseBody/pose-body.png'),
		insetIconURL: require('../extensions/poseBody/pose-body-small.svg'),
		collaborator: 'Raise Playground',
        description: 'Sense body position with the camera.',
        featured: true,
        incompatibleWithScratch: true
    },
	{
        name: 'Hand Sensing',
        extensionId: 'poseHand',
        tags: ['othermods'],
		isNew: false,
        iconURL: require('../extensions/poseHand/pose-hand.png'),
		insetIconURL: require('../extensions/poseHand/pose-hand-small-3.svg'),
		collaborator: 'Raise Playground',
        description: 'Sense hand position with the camera.',
        featured: true,
        incompatibleWithScratch: true
    },
	{
        name: 'Object Detection',
        extensionId: 'objectDetection',
		tags: ['othermods'],
		isNew: false,
        iconURL: require('../extensions/objectDetection/objectdetection.png'),
		insetIconURL: require('../extensions/objectDetection/objectdetectionsmall.svg'),
        description: 'Detect and identify objects in the camera view.',
		collaborator: 'Raise Playground',
        featured: true,
        incompatibleWithScratch: true
    },
	{
    name: "Text Sentiment",
    extensionId: "textSentiment",
    collaborator: "TYiC",
	tags: ['othermods'],
	isNew: false,
    iconURL: require('../extensions/textSentiment/textSentiment.png'),
	insetIconURL: require('../extensions/textSentiment/textSentiment-small.png'),
    description: "Text Sentiment.",
    featured: true,
    disabled: false,
    internetConnectionRequired: true,
    useAutoScan: false,
    helpLink: "https://github.com/estea8968/scratch3-internet",
    incompatibleWithScratch: true
  },
  {
        name: 'Smart Lights',
        extensionId: 'hue',
        tags: ['cognimates', 'othermods'],
		isNew: false,
        iconURL: require('../extensions/cognimates/Hue_extension.png'),
		collaborator: 'Cognimates',
        description: 'Blocks used for changing and modifying lights.',
        featured: true,
        incompatibleWithScratch: true
    },
	{
        name: 'Feelings',
        extensionId: 'sentiment',
        tags: ['cognimates', 'othermods'],
		isNew: false,
        iconURL: require('../extensions/cognimates/sentiment_ext.png'),
		insetIconURL: require('../extensions/cognimates/sentiment-small.svg'),
		collaborator: 'Cognimates',
        description: 'Detects feelings',
        featured: true,
        incompatibleWithScratch: true
    },
	{
        name: 'Wemo',
        extensionId: 'wemo',
        tags: ['cognimates', 'othermods'],
		isNew: false,
        iconURL: require('../extensions/cognimates/wemo_ext.png'),
		collaborator: 'Cognimates',
        description: 'Play with Wemo in PotentiaMod.',
        featured: true,
        incompatibleWithScratch: true
    },
	{
        name: (
            <FormattedMessage
                defaultMessage="HighClass"
                description="Name of HighClass extension"
                id="sn.hc.name"
            />
        ),
        extensionId: 'hc',
		tags: ['othermods'],
		isNew: false,
		collaborator: 'Cubix Entertainment',
        iconURL: require('../extensions/hc/hc.svg'),
	    insetIconURL: require('../extensions/hc/hc-small.svg'),
        description: (
            <FormattedMessage
                defaultMessage="Special Blocks that make development alot easier. Also compatible with PotentiaMod."
                description="Description of HighClass extension"
                id="sn.hc.description"
            />
        ),
        featured: true,
        incompatibleWithScratch: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Snap"
                description="Name of Snext Audio Player extension"
                id="sn.snap.name"
            />
        ),
        extensionId: 'snap',
		tags: ['othermods'],
		isNew: false,
		collaborator: 'Cubix Entertainment',
        iconURL: require('../extensions/snap/snap.svg'),
	    insetIconURL: require('../extensions/snap/snap-small.svg'),
        description: (
            <FormattedMessage
                defaultMessage="SNext Audio Player or SNAP is an extension developed to allow developers to play audio from an external source."
                description="Description of SNext Audio Player extension"
                id="sn.snap.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true,
        incompatibleWithScratch: true
    },
	{
        name: (
            <FormattedMessage
                defaultMessage="Robobo"
                description="Robobo 3.0 Extension"
                id="gui.extension.robobo.name"
            />
        ),
        extensionId: 'robobo',
        iconURL: require('../extensions/robobo/robobo.png'),
	    insetIconURL: require('../extensions/robobo/robobo-small.svg'),
		tags: ['othermods'],
		isNew: false,
		collaborator: 'MINT',
        description: (
            <FormattedMessage
                defaultMessage="Robobo extension."
                description="Description for the 'Music' extension"
                id="gui.extension.robobo.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true,
        incompatibleWithScratch: true
    },    
	{
    name: 'LEGO Mario',
    extensionId: 'legoMario',
    collaborator: 'bricklife',
    iconURL: require('../extensions/legomario/legomario.png'),
    insetIconURL: require('../extensions/legomario/legomario-small.svg'),
    description: 'Know what he\'s doing!',
	tags: ['othermods'],
	isNew: false,
    featured: true,
    disabled: false,
    bluetoothRequired: true,
    internetConnectionRequired: true,
    launchPeripheralConnectionFlow: true,
    useAutoScan: true,
    connectionIconURL: require('../extensions/legomario/legomario-illustration.svg'),
    connectionSmallIconURL: require('../extensions/legomario/legomario-small.svg'),
    connectionTipIconURL: require('../extensions/legomario/legomario-button-illustration.svg'),
    connectingMessage: 'Connecting',
    helpLink: 'https://scratch.mit.edu/boost',
    incompatibleWithScratch: true
    },
	{
    name: 'LEGO Luigi',
    extensionId: 'legoLuigi',
    collaborator: 'bricklife',
    iconURL: require('../extensions/legoluigi/legoluigi.png'),
    insetIconURL: require('../extensions/legoluigi/legoluigi-small.svg'),
    description: 'Know what he\'s doing!',
	tags: ['othermods'],
	isNew: false,
    featured: true,
    disabled: false,
    bluetoothRequired: true,
    internetConnectionRequired: true,
    launchPeripheralConnectionFlow: true,
    useAutoScan: true,
    connectionIconURL: require('../extensions/legoluigi/legoluigi-illustration.svg'),
    connectionSmallIconURL: require('../extensions/legoluigi/legoluigi-small.svg'),
    connectionTipIconURL: require('../extensions/legoluigi/legoluigi-button-illustration.svg'),
    connectingMessage: 'Connecting',
    helpLink: 'https://scratch.mit.edu/boost',
    incompatibleWithScratch: true
    },
	{
    name: 'LEGO Peach',
    extensionId: 'legoPeach',
    collaborator: 'bricklife',
    iconURL: require('../extensions/legopeach/legopeach.png'),
    insetIconURL: require('../extensions/legopeach/legopeach-small.svg'),
    description: 'Know what she\'s doing!',
	tags: ['othermods'],
	isNew: false,
    featured: true,
    disabled: false,
    bluetoothRequired: true,
    internetConnectionRequired: true,
    launchPeripheralConnectionFlow: true,
    useAutoScan: true,
    connectionIconURL: require('../extensions/legopeach/legopeach-illustration.svg'),
    connectionSmallIconURL: require('../extensions/legopeach/legopeach-small.svg'),
    connectionTipIconURL: require('../extensions/legopeach/legopeach-button-illustration.svg'),
    connectingMessage: 'Connecting',
    helpLink: 'https://scratch.mit.edu/boost',
    incompatibleWithScratch: true
    },
	{
        name: 'Ada Browser',
        tags: ['othermods'],
        extensionId: 'adabrowser',
        iconURL: 'https://www.adacraft.org/studio/static/assets/40998229311219c2117265d5e4bd9745.png',
        insetIconURL: 'https://www.adacraft.org/studio/static/assets/f1fe0bbe960a0d60c783b111c84b837e.svg',
        description: 'Some new blocks to interact with the browser',
        credits: 'Adacraft',
        featured: true
    },
	{
        name: 'LEGO Duplo Train',
        extensionId: 'duploTrain',
        collaborator: 'bricklife',
        iconURL: 'https://bricklife.com/scratch-gui/static/assets/12fd44910fedc5b99761e024ddf05c59.png',
        insetIconURL: 'https://bricklife.com/scratch-gui/static/assets/4e8df03eb146bd7f93b355c62450029b.svg',
        description: 'Build and control your train!',
        tags: ['othermods', 'hardware', 'iot'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: true

    },
{
        name: 'LEGO Powered Up',
        extensionId: 'poweredUp',
        collaborator: 'bricklife',
        iconURL: 'https://bricklife.com/scratch-gui/static/assets/27d60d6cf54cf80ce2bbb8493e43262e.png',
        insetIconURL: 'https://bricklife.com/scratch-gui/static/assets/9a7b1e04a4d5afda42d2d4bb2de61247.svg',
        description: 'Build with motors and sensors!',
        tags: ['othermods', 'hardware', 'iot'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: true
    },
	{
        name: 'Adacraft GIF',
        extensionId: 'gif',
        tags: ['othermods'],
        iconURL: 'https://www.adacraft.org/studio/static/assets/e482db7668b6f6bbc8ce5223e4427e96.png',
        insetIconURL: 'https://www.adacraft.org/studio/static/assets/bbb78885842b3cd65078881647f674f2.svg',
        description: 'Some new blocks to encode GIF files.',
        credits: 'Adacraft',
        featured: true
    },
	{
        name: 'NES Emulator',
        extensionId: 'nesemulator', // update reference once file names are updated
        tags: ['othermods'],
        bluetoothRequired: false,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: false,
        iconURL: NESEmuThumb,
        insetIconURL: NESInsetIcon,
        description: 'Use the power of the NES emulation in GaiaMod!',
        featured: true,
        credits: 'Gvbvdxx'
    },
	{
        name: 'Echidna',
        extensionId: 'echidna',
        collaborator: 'echidna',
        iconURL: echidnaIconURL,
        insetIconURL: echidnaInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'echidna' extension"
                id="gui.extension.echidna.description"
            />
        ),
        featured: true,
		tags: ['othermods', 'iot'],
        helpLink: 'http://echidna.es/'
    },
	{
        name: 'scratch2maqueen',
        extensionId: 'scratch2maqueen', // update reference once file names are updated
        tags: ['othermods', 'hardware', 'iot'],
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        iconURL: 'https://raw.githubusercontent.com/champierre/scratch2maqueen/master/scratch-gui/src/lib/libraries/extensions/scratch2maqueen/scratch2maqueen.png',
        insetIconURL: 'https://raw.githubusercontent.com/champierre/scratch2maqueen/master/scratch-gui/src/lib/libraries/extensions/scratch2maqueen/scratch2maqueen-small.png',
        description: 'Control DFRobot Maqueen.',
        featured: true,
        credits: 'Vernier',
    },
	{
        name: 'Roku',
        extensionId: 'roku',
        internetConnectionRequired: true,
        credits: 'Gvbvdxx',
        iconURL: roku,
		insetIconURL: rokuSmall,
        tags: ['othermods', 'iot'],
        description: 'Interact with your Roku tv via the GM2Helper software!',
        featured: true
    },
	{
        name: 'ChatGPT2Scratch',
        extensionId: 'chatgpt2scratch',
        iconURL: chatgpt2scratchIconURL,
        insetIconURL: chatgpt2scratchInsetIconURL,
        credits: 'ichiroc',
        featured: true,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        tags: ['othermods', 'ai'],
        description: 'Interact with ChatGPT in Scratch!',
        featured: true
    },
    {
        name: 'ML2Scratch',
        extensionId: 'ml2scratch',
        iconURL: ml2scratchIconURL,
        insetIconURL: ml2scratchInsetIconURL,
		credits: 'champierre',
        featured: true,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        tags: ['othermods', 'ai'],
        description: 'Lets you train with Machine Learning blocks.',
        featured: true
    },
    {
        name: 'TM2Scratch',
        extensionId: 'tm2scratch',
        iconURL: tm2scratchIconURL,
        insetIconURL: tm2scratchInsetIconURL,
		credits: 'Tsukurusha, YengawaLab and Google',
        featured: true,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        tags: ['othermods', 'ai'],
        description: 'Lets you train with images and audio.',
        featured: true
    },
    {
        name: 'TMPose2Scratch',
        extensionId: 'tmpose2scratch',
        iconURL: tmpose2scratchIconURL,
        insetIconURL: tmpose2scratchInsetIconURL,
		credits: 'champierre',
        featured: true,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        tags: ['othermods', 'ai'],
        description: 'Lets you train with poses.',
        featured: true
    },
    {
        name: 'HandPose2Scratch',
        extensionId: 'handpose2scratch',
        credits: 'champierre',
        description: 'Hand tracking in Scratch.',
        iconURL: handpose2scratchIconURL,
        insetIconURL: handpose2scratchInsetIconURL,
        tags: ['othermods', 'ai'],
        internetConnectionRequired: true,
        featured: true
    },	
    {
        name: 'Posenet2Scratch',
        extensionId: 'posenet2scratch',
        iconURL: posenet2scratchIconURL,
        insetIconURL: posenet2scratchInsetIconURL,
        credits: 'champierre',
        featured: true,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        tags: ['othermods', 'ai'],
        description: 'Detect human poses quickly and accurately with a normal WebCam without using a special device',
        featured: true
    },
    {
        name: 'Facemesh2scratch',
        extensionId: 'facemesh2scratch',
        iconURL: facemesh2scratchIconURL,
        insetIconURL: facemesh2scratchInsetIconURL,
        credits: 'champierre',
        internetConnectionRequired: true,
        tags: ['othermods', 'ai'],
        description: 'Use facetracking in your projects!',
        featured: true
    },
    {
        name: 'Scratch2WebSerialAPI',
        extensionId: 'scratch2webserialapi',
        iconURL: scratch2webserialapiIconURL,
        insetIconURL: scratch2webserialapiInsetIconURL,
        credits: 'champierre',
        internetConnectionRequired: true,
        tags: ['othermods', 'iot'],
        description: 'Do more complex things with hardware via the serial ports.',
        featured: true
    },
    {
        name: 'ImageClassifer2Scratch',
        extensionId: 'ic2scratch',
        iconURL: ic2scratchIconURL,
        insetIconURL: ic2scratchInsetIconURL,
        credits: 'champierre',
        internetConnectionRequired: true,
        tags: ['othermods', 'ai'],
        description: 'Image Classification Blocks.',
        featured: true
    },
	{
        name: 'Extension Manager',
        extensionId: 'https://gaiamod-main.github.io/extensions/GaiaWindWave90/extensionManager.js',
        iconURL: 'https://cicpowerbox.us/wp-content/uploads/2021/08/CIC-POWERBOX-CROSSOVER-3.png',
        credits: 'soiz1, with modifications by GaiaWindWave90',
        tags: ['othermods'],
        description: 'Manages extensions.',
        internetConnectionRequired: false,
        featured: true
    },
 {
        name: 'Bluetooth Request',
        extensionId: 'https://bludisanlemon.github.io/lemons-gallery/extensions/Lemon/bluetooth.js',
        credits: 'BludIsAnLemon',
        iconURL: 'https://bludisanlemon.github.io/lemons-gallery/images/Lemon/bluetooth.png',
        tags: ['othermods'],
        description: "Allows you to send out bluetooth requests to nearby bluetooth devices.",
        internetConnectionRequired: false,
        featured: true
    },
	
    {
        name: 'XML',
        extensionId: 'jwXML',
        iconURL: jwXMLExtensionIcon,
        tags: ['penguinmod', 'datamgmt'],
        description: 'Creating, parsing and modifying XML data.',
        extDeveloper: 'jwklong',
        featured: true
    },
	{
        name: 'OneGpio Arduino',
        extensionId: 'onegpioArduino',
        collaborator: 'Mr. Y\'s Lab',
        iconURL: onegpioArduinoImage,
        insetIconURL: onegpioArduinoInsetIconURL,
        description: 'OneGPIOArduino',
        tags: ['othermods', 'hardware', 'iot'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'
    },
    {
        name: 'OneGpio Raspberry Pi',
        extensionId: 'onegpioRpi',
        collaborator: 'Mr. Y\'s Lab',
        iconURL: onegpioRpiImage,
        insetIconURL: onegpioRpiInsetIconURL,
        description: 'OneGPIORpi',
        tags: ['othermods', 'hardware', 'iot'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    },
    {
        name: 'OneGpio ESP-8266',
        extensionId: 'onegpioEsp',
        collaborator: 'Mr. Y\'s Lab',
        iconURL: onegpioEspImage,
        insetIconURL: onegpioEspInsetIconURL,
        description: 'OneGPIOEsp',
        tags: ['othermods', 'hardware', 'iot'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    },
    {
        name: 'OneGpio Picoboard',
        extensionId: 'onegpioPicoboard',
        collaborator: 'Mr. Y\'s Lab',
        iconURL: onegpioPicoboardImage,
        insetIconURL: onegpioPicoboardInsetIconURL,
        description: 'OneGPIOPicoboard',
        tags: ['othermods', 'hardware', 'iot'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    },
    {
        name: 'OneGpio Playground Express',
        extensionId: 'onegpioCpx',
        collaborator: 'Mr. Y\'s Lab',
        iconURL: onegpioCpxImage,
        insetIconURL: onegpioCpxInsetIconURL,
        description: 'OneGPIOCpx',
        tags: ['othermods', 'hardware', 'iot'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    },
    {
        name: 'OneGpio RoboHAT MM1',
        extensionId: 'onegpioRoboHAT',
        collaborator: 'Mr. Y\'s Lab',
        iconURL: onegpioRoboHATImage,
        insetIconURL: onegpioRoboHATInsetIconURL,
        description: 'OneGPIORoboHAT',
        tags: ['othermods', 'hardware', 'iot'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    },
    {
        name: 'OneGpio Raspberry Pi Pico',
        extensionId: 'onegpioRpiPico',
        collaborator: 'Mr. Y\'s Lab',
        iconURL: onegpioRpiPicoImage,
        insetIconURL: onegpioRpiPicoInsetIconURL,
        description: 'onegpioRpiPico',
        tags: ['othermods', 'hardware', 'iot'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'
	},
    {
        name: 'Lpp',
        extensionId: 'https://electramod-extensions-gallery.vercel.app/internal_extensions/lpp/index.global.js',
        iconURL: LppExtensionIcon,
        tags: ['othermods'],
        description: '🛠️ (Experimental) A high-level programming language based on Scratch.',
        credits: 'FurryR',
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        collaborator: 'LEGO',
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        customInsetColor: '#FFBF00',
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO BOOST',
        extensionId: 'boost',
        collaborator: 'LEGO',
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Bring robotic creations to life."
                description="Description for the 'LEGO BOOST' extension"
                id="gui.extension.boost.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        customInsetColor: '#FFAB19',
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their BOOST."
                id="gui.extension.boost.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/boost'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        featured: true,
        disabled: false,
        tags: ['scratch', 'hardware'],
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        customInsetColor: '#FF6680',
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        collaborator: 'Vernier',
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
        customInsetColor: '#4C97FF',
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Sense push, pull, motion, and spin."
                description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
                id="gui.extension.gdxfor.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their force and acceleration sensor."
                id="gui.extension.gdxfor.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/vernier'
    },
	 {
		//Extension Galleries       
		name: 'GaiaMod Extension Gallery',
        href: 'https://gaiawindwave90.github.io/gm-extensions/',
        extensionId: 'special_gaiamodExtensionLibrary',
        iconURL: gaiaExGalleryThumb,
        description: 'See all of GaiaMod\'s extensions, even user-submitted. Opens in a new tab.',
        tags: ['gaiamod', 'library'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="PenguinMod Extra Extensions"
                description="Name of library item to open the Extra Extensions gallery"
                id="pm.extraLibraryExtensions.name"
            />
        ),
        href: 'https://extensions.penguinmod.com',
        extensionId: 'special_penguinmodExtensionLibrary',
        iconURL: penguinmodLibraryExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="See some user-submitted extensions. Opens in a new tab."
                description="Description of library item to open the Extra Extensions gallery"
                id="pm.extraLibraryExtensions.description"
            />
        ),
        tags: ['penguinmod', 'library'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="TurboWarp Extension Gallery"
                description="Name of extensions.turbowarp.org in extension library"
                id="tw.extensionGallery.name"
                values={{
                    APP_NAME: "TurboWarp"
                }}
            />
        ),
        href: 'https://extensions.turbowarp.org/',
        extensionId: 'special_turbowarpExtensionLibrary',
        iconURL: galleryIcon,
        description: (
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="We list many TurboWarp extensions here for convenience, but you can find even more on extensions.turbowarp.org."
                description="Description of extensions.turbowarp.org in extension library"
                id="tw.extensionGallery.description"
            />
        ),
        tags: ['tw', 'turbowarp', 'library'],
        featured: true
	},
    {
        name: (
            <FormattedMessage
                defaultMessage="TutelMod Extra Extensions"
                description="Name of library item to open the Extra Extensions gallery"
                id="tutel.extraLibraryExtensions.name"
            />
        ),
        href: 'https://tutelmod.github.io/TutelMod-ExtensionsGallery/?editor=true',
        extensionId: 'special_tutelmodExtensionLibrary',
        iconURL: tutelmodLibraryExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="See some user-submitted extensions for the TutelMod community. Opens in a new tab."
                description="Description of library item to open the Extra Extensions gallery"
                id="tm.extraLibraryExtensions.description"
            />
        ),
        tags: ['othermods', 'library', 'tutelmod'],
        featured: true
    },
	{
        name: 'SharkPool\'s Extension Collection',
        href: 'https://sharkpools-extensions.vercel.app/?originPM=false,
        extensionId: 'special_sharkpoolExtensionLibrary',
        iconURL: sharkpoolGalleryIcon,
        description: 'Tons of extensions created by SharkPool.\n\nClick on an extension while this menu is open to add it to your project.',
        credits: 'Listed in the site',
        tags: ['library', 'sharkpool'],
        featured: true
    },
	{
		name: 'electricprogramming\'s Extension Gallery',
        href: 'https://electricprogramming-scratch-exts.vercel.app/,
        extensionId: 'electricprogrammingExtensionGallery',
        iconURL: require('../Neublamod/Unknownextgallery.svg'),
        description: 'see all of electricprogramming\'s Extensions. Opens in a new tab.',
        credits: 'electricprogramming',
        tags: ['library', 'othermods],
        featured: true
    },
    {
        name: 'Andreitom1\'s Extension Collection',
        href: 'https://tomtomproductions.neocities.org/extension_collection,
        extensionId: 'Andreitom1ExtensionCollection',
        iconURL: Andreitom1ExtensionCollectionicon,
        description: 'see all of Andreitom1\'s Extensions. Opens in a new tab.',
        credits: 'Andreitom1',
        tags: ['library', 'othermods'],
        featured: true
	},
	{
		name: 'Almeja\'s Extension Gallery,
        href: 'https://alejo14.vercel.app/extensions.html',
        extensionId: 'almegaExtensionLibrary',
        iconURL: AlmejaExtensionGalleryicon,
        descriptimport: 'see all of almejas Extensions. Opens in a new tab.',
        credits: 'alejo 2014',
        tags: ['library'],
        featured: true
	},
    {
        name: 'MubiLop Extension Gallery',
        href: 'https://mubi.tech/gallery.html',
        extensionId: 'special_mubimExtensionLibrary',
        iconURL: mubiLibraryExtensionIcon,
        description: 'Extensions made by MubiLop. disabled due to link not working',
        tags: ['othermods', 'library', 'disabled'],
        featured: true
	},
    {
        name: 'Pooiod7\'s Scratch Extensions',
        href: 'https://p7scratchextensions.pages.dev/',
        extensionId: 'Pooiod7ExtensionLibrary',
        iconURL: Pooiod7extgalleryicon,
        description: 'see all of pooiod7s extensions. Opens in a new tab',
        tags: ['othermods', 'library'],
        featured: true
	},
    {
        name: 'Callum\'s Ultimate Gallery',
        href: 'https://gallery.callumjt.dev/',
        extensionId: 'special_callumExtensionLibrary',
        iconURL: callumLibraryExtensionIcon,
        description: 'A massive gallery for all known tw extensions. disabled due to link not working',
        tags: ['othermods', 'library', 'disabled'],
        featured: true
	},
    {
        name: 'ArkIDE Extra Extensions',
        href: 'https://extensions.arkide.site/',
        extensionId: 'special_arkideExtensionLibrary',
        iconURL: 'https://studio.arkide.site/static/assets/ec6c0b201605163f47d10636142e36b9.svg',
        description: 'See some Ark IDE External extensions, even user-submitted. Opens in a new tab.',
        tags: ['arkide', 'library'],
        featured: true
    },
    {
        name: 'ElectraMod Extra Extensions',
        href: 'https://electramod-extensions-gallery.vercel.app',
        extensionId: 'special_electramodExtensionLibrary',
        iconURL: 'https://raw.githubusercontent.com/ElectraMod/scratch-gui/4751b8232c951c6119cca8776054fa5b496c30dc/src/lib/libraries/extensions/electramod/library.svg',
        description: 'See some user-submitted, ElectraMod External extensions. Opens in a new tab.',
        tags: ['electramod', 'library'],
        featured: true
    },
    {
        name: 'DinosaurMod Extra Extensions',
        href: 'https://dinosaurmod.github.io/extensions/',
        extensionId: 'special_dinosaurmodExtensionLibrary',
        iconURL: 'https://raw.githubusercontent.com/Dinosaurmod/Dinosaurmod.github.io/d32911e4a99caafcc7ba7523b468cf91de061b7e/src/lib/libraries/extensions/dinosaurmod/gallery.svg',
        description: 'See some Dinosaurmod and user-submitted extensions. Opens in a new tab.',
        tags: ['dinosaurmod', 'library'],
        featured: true
    },
    {
        name: 'Snail-IDE Extra Extensions',
        href: 'https://snail-ide-extensions-gallery.vercel.app/',
        extensionId: 'special_snailideExtensionLibrary',
        iconURL: snailIDEGalleryThumb,
        description: 'See some Snail-IDE and user-submitted extensions. Opens in a new tab.',
        tags: ['snailide', 'library'],
        featured: true
    },
	{
        name: 'Dash Extra Extensions',
        href: 'https://dashblocks.org/extensions/',
        extensionId: 'special_dashExtensionLibrary',
        iconURL: 'https://raw.githubusercontent.com/DashBlocks/scratch-gui/3ce7fe9c45c09bc33b5da54b7b9db449344bdfec/src/lib/libraries/extensions/gallery/gallery.svg',
        description: 'See some Dash External extensions. Opens in a new tab.',
        tags: ['dash', 'library'],
        featured: true
    },
	{
        name: 'NitroBolt Extra Extensions',
        href: 'https://extensions.nitrobolt.org',
        extensionId: 'special_nbExtensionLibrary',
        iconURL: 'https://raw.githubusercontent.com/Nitro-Bolt/scratch-gui/7412982dfed046f57c55bf18b279b7700367c6c6/src/lib/libraries/extensions/gallery/gallery-nb.svg',
        description: 'See some NitroBolt External extensions. Opens in a new tab.',
        tags: ['nitrobolt', 'library'],
        featured: true
    },
	{
        name: 'AstraEditor Extra Extensions',
        href: 'https://editors.astras.top/extensions/',
        extensionId: 'special_aeExtensionLibrary',
        iconURL: 'https://github.com/AstraEditor/scratch-gui/blob/develop/src/lib/libraries/extensions/gallery/aegallery.png?raw=true',
        description: 'See some AstraEditor External extensions. Opens in a new tab.',
        tags: ['astraeditor', 'library'],
        featured: true
    },
	{
        name: 'Bilup Extra Extensions',
        href: 'https://extensions.bilup.org/',
        extensionId: 'special_bilupExtensionLibrary',
        iconURL: 'https://raw.githubusercontent.com/Bilup/scratch-gui/bb372dc0774976a20c4a82636ca0a0db6c55d7d0/src/lib/libraries/extensions/gallery/gallery.svg',
        description: 'See some Bilup External extensions. Opens in a new tab.',
        tags: ['bilup', 'library'],
        featured: true
    },
	{
        name: 'AmpMod Extra Extensions',
        href: 'https://ampmod.codeberg.page/extensions/',
        extensionId: 'special_ampmodExtensionLibrary',
        iconURL: ampmodgalleryThumb,
        description: 'See some AmpMod External extensions. Opens in a new tab.',
        tags: ['othermods', 'library'],
        featured: true
    },
	{
        name: 'OmniBlocks Extra Extensions',
        href: 'https://omniblocks.github.io/extensions/',
        extensionId: 'special_omniblocksExtensionLibrary',
        iconURL: obgalleryIcon,
        description: 'See some OmniBlocks External extensions. Opens in a new tab.',
        tags: ['othermods', 'library'],
        featured: true
	},
    {
        name: 'Scratch Repo Mega Extension Gallery',
        href: 'https://scratchmegarepo.pages.dev/extensions',
        extensionId: 'special_scratchmegaExtensionLibrary',
        iconURL: scratchmegarepoThumb,
        description: 'A mega gallery for most of the extensions',
        tags: ['library'],
        featured: true
    },
    {
        name: 'Mistium\'s Extensions Gallery',
        href: 'https://extensions.mistium.com/',
        extensionId: 'special_mistiumExtensionLibrary',
        iconURL: 'https://raw.githubusercontent.com/ElectraMod/scratch-gui/4751b8232c951c6119cca8776054fa5b496c30dc/src/lib/libraries/extensions/mistium/library.svg',
        description: 'Extensions made by Mistium',
        tags: ['mistwarp', 'library'],
        featured: true
    },
    {
        name: 'ElmoBear\'s Extension Gallery',
        href: 'https://kylekart.github.io/ScratchExtensions/',
        extensionId: 'special_elmobearExtensionLibrary',
        iconURL: defaultExtensionIcon,
        description: 'Extensions made by ElmoBear',
        tags: ['library'],
        featured: true
    },
        {
        name: 'Ruby Extension Gallery',
        href: 'https://ruby-devs.vercel.app/gallery',
        extensionId: 'rubyextension',
        iconURL: 'https://github.com/Snail-IDE/snail-ide.github.io/blob/develop/src/lib/libraries/extensions/snail-ide/ruby.png?raw=true',
        description: 'View the Useful Ruby Team Extensions!',
        credits: 'Ruby Team',
        tags: ['library'],
        featured: true
    },
    {
        name: 'KittenBot Extension Maker',
        href: 'https://kittenbot.github.io/scratch3-extension/',
        extensionId: 'special_kittenBotExtensionMaker',
        iconURL: kittenbotThumb,
        description: 'Create extensions with KittenBot!',
        tags: ['othermods', 'builders', 'extcreate'],
        featured: true
    },
	{
        // not really an extension, but it's easiest to present it as one
        name: 'ExtForge',
        href: 'https://jwklong.github.io/extforge',
        extensionId: 'special_extforge',
        iconURL: ExtForgeIcon,
        description: 'Create extensions with a block-based UI.',
        extDeveloper: 'jwklong',
        isNew: true,
        tags: ['extcreate'],
        featured: true
	},
	{
		name: 'TutelForge',
        href: 'https://tutelmod.github.io/TutelForge',
        extensionId: 'special_tutelforge',
        iconURL: defaultExtensionIcon,
        description: 'A fork of ExtForge that focuses on creating extensions for the TutelMod community.',
        extDeveloper: 'vedal789',
        isNew: true,
        tags: ['extcreate', 'othermods'],
        featured: true,
        credits: 'Forked from ExtForge by jwklong'
    },
    {
        name: 'GaiaMod Extension Editor',
        href: 'https://gaiamod-main.github.io/Extension-Editor/',
        extensionId: 'GMExtEditor',
		iconURL: require('../extensions/extension-builders/GaiaExtEditor.svg'),
	    insetIconURL: require('../extensions/extension-builders/GaiaExtEditor-small.svg'),
		credits: 'gaiawindwave90
        description: 'Either create or edit extensions with a modfication of Astra Editor Extension Editor.',
        tags: ['gaiamod', 'builders', 'extcreate'],
        featured: true,
    },
    {
        name: 'TurboBuilder',
        href: 'https://turbobuilder.vercel.app/',
        extensionId: 'special_turboBuilder',
        iconURL: turboBuilderIcon,
        description: 'Create your own amazing extensions using a scratch-based UI!',
        credits: 'Started by JeremyGamer13, continued by jwklong',
        tags: ['turbowarp', 'builders', 'extcreate'],
        featured: true
	},
    {
        name: 'TurboBuilder - Dev Branch',
        href: 'https://dev-turbobuilder.vercel.app/',
        extensionId: 'turboBuilderDev',
        iconURL: require('../extensions/extension-builders/turbobuilder-dev.png'),
        description: 'Publicly available developer branch, with the latest features.',
        collaborator: 'Started by JeremyGamer13, continued by jwklong',
        tags: ['tw', 'builders', 'dev', 'turbowarp', 'extcreate'],
        featured: true
    },
    {
        name: 'PenguinBuilder',
        href: 'https://penguinbuilder.github.io/editor/',
        extensionId: 'special_PenguinBuilder',
        iconURL: 'https://u.cubeupload.com/Mr_rudy/costume1.png',
        description: 'Create your own extensions using Blockly.',
        credits: 'chickencuber',
        tags: ['penguinmod', 'builders', 'extcreate'],
        featured: true
    }
];


/*
----------------------------------------------
Secret extensions that only showed up when a certain password is entered as url params in the url address bar.
----------------------------------------------
*/
if (IsSecretExt) {
const hiddenExt = [
         {
            name: 'Ding Dong Ditch',
            extensionId: 'https://gaiawindwave90.github.io/gm-extensions/GaiaWindWave90/DingDongDitch.js',
            iconURL: 'https://gaiawindwave90.github.io/gm-extensions/images/GaiaWindWave90/DingDongDitch.svg',
            description: 'Some extension that I did for fun.',
			tags: ['special', 'gaiamod', 'jokes'],
            insetIconURL: gaiamodIcon,
		    gaiaModRequired: true,
            credits: 'GaiaWindWave90 with some blocks from other users.',
            featured: true
        },

		{
            name: 'Pony Spawner',
            extensionId: 'https://gaiawindwave90.github.io/gm-extensions/GaiaWindWave90/PonySpawner.js',
            iconURL: 'https://preview.redd.it/hot-take-as-much-as-i-love-mlp-fim-i-think-the-root-of-all-v0-y1j8qxt9yx681.jpg?width=640&crop=smart&auto=webp&s=11c28c7269ad61287050bddb3059abf1d95129c8',
            description: 'Spawn characters from MLP:FIM on GaiaMod.',
			tags: ['special', 'gaiamod'],
            insetIconURL: gaiamodIcon,
            credits: 'GaiaWindWave90',
            featured: true
        },
		{
        name: 'DINNYE',
        extensionId: 'dinnye',
        collaborator: 'völgyváros',
		iconURL: 'https://dinnye-tabor.github.io/scratch-gui/static/assets/00f0fe02e7c6fe3fc2c38abdb91bf09a.jpg',
        insetIconURL: 'https://dinnye-tabor.github.io/scratch-gui/static/assets/665527ddcbe239394f2df7cc3c595bd7.png',
        description: "Control your Melon robots with this!",
		tags: ['special', 'othermods', 'iot'],
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false
    },
	{
        name: 'Line',
        extensionId: 'line',
        credits: 'Ankurugranpa',
        iconURL: lineBlockImage,
        insetIconURL: lineBlockButtonImage,
		tags: ['special', 'othermods'],
        description: 'Connect to LINE message API!',
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
    },
	{
        name: 'PotentiaMod Extension Gallery',
        href: 'https://potentiamod.github.io/pot-extensions/',
        extensionId: 'secret_extensionLibrary',
        iconURL: 'https://potentiamod.github.io/static/assets/160e7ca1ae1002eae8b787664d92e5b0.svg',
        description: 'See all of PotentiaMod\'s extensions, even user-submitted. Opens in a new tab.',
        tags: ['special', 'gaiamod', 'othermods', 'library', 'potentia'],
        featured: true
    },
	{
        name: 'Former VM Extension Collection',
        href: 'https://gaiawindwave90.github.io/VM-to-JS-Extensions/?originSpecial=false',
        extensionId: 'special_VMExtLibrary',
        iconURL: VMicon,
        description: 'Tons of extensions converted from built-ins.\n\nClick on an extension to add it to your project.',
        collaborator: 'Listed in the site',
        tags: ['special', 'gaiamod', 'library', 'potentia'],
        featured: true
    }
];

    hiddenExt.forEach(ext => {
        menuItems.push(ext);
    });
}

if (IsMysteriousExt && IsSecretExt) {
const mysteryExtension = [
	{
        name: '???',
        extensionId: 'https://gaiamod-main.github.io/extensions/MysteryExtension.js',
        iconURL: mysteryThumb,
		insetIconURL: mysteryInsetIcon,
        credits: 'arajf',
        tags: ['othermods', 'jokes'],
        description: 'What\'s this extension doing here? You only know it when you use it.',
        featured: true
    },
];
mysteryExtension.forEach(ext => {
        menuItems.push(ext);
    });
}

/*
----------------------------------------------
### NOTE TO PENGUINMOD/GAIAMOD/POTENTIAMOD/NEUBLAMOD FORKS: ###
Please DO NOT make the extensions below accessible in the editor without livetests!
They are NOT fully developed for people to use and create full projects with!

These extensions could have missing features, cause random errors, broken projects, or even crash the editor!
Moving these into the main extension list will cause people who use your fork to assume they are ready for them to use!

Please keep these in livetests to reduce bug reports on your fork! :)
----------------------------------------------
*/
if (IsLocal || IsLiveTests) {
    const extras = [
        {
            name: (
                <FormattedMessage
                    defaultMessage="HTML Canvas"
                    description="Name of Text extension"
                    id="canvas.name"
                />
            ),
            extensionId: 'newCanvas',
            iconURL: canvasExtensionBanner,
            tags: ['penguinmod'],
            insetIconURL: canvasExtensionIcon,
            customInsetColor: '#0094FF',
            description: (
                <FormattedMessage
                    defaultMessage="Extra drawing tools using an HTML Canvas. Works well when used with other extensions."
                    description="Description of Text extension"
                    id="text.description"
                />
            ),
            featured: true
        },
        {
            name: 'OLD Canvas',
            extensionId: 'canvas',
            iconURL: canvasExtensionBanner,
            tags: ['penguinmod'],
            insetIconURL: canvasExtensionIcon,
            customInsetColor: '#0094FF',
            description: 'depracated version of HTML Canvas.',
            featured: true
        },
        {
            name: 'Legacy Files',
            extensionId: 'jgFiles',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod', 'datamgmt'],
            description: 'Basic blocks for files. This has been replaced by the TurboWarp files extension.',
            featured: true
        },
        {
            name: 'Clone Communication',
            extensionId: 'jgClones',
            iconURL: jgCloneManagerExtensionIcon,
            tags: ['penguinmod'],
            description: 'Mainly sharing data between clones and the main sprite, but also some other small features. This has been replaced by the TurboWarp Clones+ extension.',
            featured: true
        },
        {
            name: 'Easy Save',
            extensionId: 'jgEasySave',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod', 'datamgmt'],
            description: 'Save variables, lists and extra info to a file, then load those things back in.',
            featured: true
        },
        {
            name: (
                <FormattedMessage
                    defaultMessage="TurboWarp Blocks"
                    description="Name of TW extension"
                    id="tw.twExtension.name"
                    values={{
                        APP_NAME: "TurboWarp"
                    }}
                />
            ),
            extensionId: 'tw',
            twDeveloper: 'GarboMuffin',
            tags: ['turbowarp'],
            insetIconURL: turbowarpIcon,
            iconURL: twIcon,
            description: 'Weird new blocks. Replaced by Sensing Expansion.',
            featured: true
        },
        {
            name: 'the doo doo extension',
            extensionId: 'jgDooDoo',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod', 'joke'],
            description: 'dr bob eae',
            featured: true
        },
        {
            name: 'an amazing extension',
            extensionId: 'jgBestExtension',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/epic.avif',
            internetConnectionRequired: true,
            tags: ['penguinmod', 'joke'],
            description: 'this is SUCH A GOOD EXTENSION USE IT NOW',
            featured: true
        },
        {
            name: 'Epic utilities',
            extensionId: 'https://extensions.penguinmod.com/extensions/SharkPool/AprilFools.js',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/epicutils.avif',
            tags: ['penguinmod', 'joke'],
            description: 'the super good utilities brought to you by todays sponsor sharkpool (the epic utilities)',
            featured: true
        },
        {
            name: 'image blocks',
            extensionId: 'https://extensions.penguinmod.com/extensions/Ashime/funneimageblocks.js',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/screenshot1.avif',
            tags: ['penguinmod', 'joke'],
            internetConnectionRequired: true,
            description: 'who needs cat blocks when you have penguin block',
            extDeveloper: 'Ashimee, 0znzw, CST1229',
            featured: true
        },
        {
            name: 'fire in the hole',
            extensionId: 'https://extensions.penguinmod.com/extensions/JeremyGamer13/FireInTheHole.js',
            iconURL: 'https://library.penguinmod.com/files/emojis/cluelesssmile.png',
            tags: ['penguinmod', 'joke'],
            internetConnectionRequired: true,
            description: 'april fools took too long man this joke is not funny anymore',
            featured: true
        },
        {
            name: 'Unite',
            extensionId: 'jwUnite',
            iconURL: jwUniteExtensionIcon,
            tags: ['penguinmod'],
            description: 'Legacy extension that was eventually merged into the default toolbox.',
            featured: true
        },
        {
            name: 'Debugging',
            extensionId: 'jgDebugging',
            iconURL: jgDebuggingIcon,
            tags: ['penguinmod'],
            description: 'Log information and run commands. Good for debugging packaged projects or just easily changing things.',
            featured: true
        },
        {
            name: 'Test Extension Loader',
            href: 'https://studio.penguinmod.com/loadExt.html',
            extensionId: 'special_testExtensionLibrary',
            iconURL: defaultExtensionIcon,
            description: 'Test loading extensions from a library. For developers.',
            featured: true
        },
        {
            name: 'Editor',
            href: 'https://studio.penguinmod.com/editor.html',
            extensionId: 'special_editorExtensionLibrary',
            iconURL: penguinmodLibraryExtensionIcon,
            description: 'Opens the editor with this tab as the parent, still with the library opened. For developers.',
            featured: true
        },
        {
            name: 'localhost:5173',
            href: 'http://localhost:5173',
            extensionId: 'special_extensionLibraryLocalhost5173',
            iconURL: defaultExtensionIcon,
            description: 'Opens localhost:5173 in a new tab with this tab as the parent. For developers',
            featured: true
        },
        {
            name: 'localhost:5173?editor=true',
            href: 'http://localhost:5173?editor=true',
            extensionId: 'special_extensionLibraryLocalhost5173EditorTrue',
            iconURL: defaultExtensionIcon,
            description: 'Opens localhost:5173 in a new tab with this tab as the parent. Sets ?editor=true. For developers',
            featured: true
        },
        {
            name: (
                <FormattedMessage
                    defaultMessage="OOP"
                    description="Name of OOP extension"
                    id="jwStructs.jwStructsExtension.name"
                />
            ),
            extensionId: 'jwStructs',
            tags: ['penguinmod'],
            iconURL: jwStructsExtensionIcon,
            description: (
                <FormattedMessage
                    defaultMessage="Removed from list. OOP blocks. OOp is a programming paradigm that uses objects and their interactions to design applications and computer programs."
                    description="Description of OOP extension"
                    id="jwStructs.jwStructsExtension.description"
                />
            ),
            featured: true
        },
        {
            name: 'PenguinMod Permissions',
            extensionId: 'JgPermissionBlocks',
            iconURL: jgPermissionExtensionIcon,
            tags: ['penguinmod'],
            description: 'Legacy extension, old blocks no longer serve a real purpose. Direct blocks to manage permissions that PenguinMod requires you have to do certain tasks.',
            featured: true
        },
        {
            name: 'Jeremys Dev Tools',
            extensionId: 'jgDev',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod'],
            description: 'Test extension to see if things are possible.\nDO NOT USE THIS IN PRODUCTION as blocks are subject to change and may corrupt your projects.',
            credits: 'Some features added from LilyMakesThings, CubesterYT, TheShovel',
            featured: true
        },
        {
            name: '3D',
            extensionId: 'jg3d',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod', '3d'],
            customInsetColor: '#B200FF',
            insetIconURL: jg3dInsetExtensionIcon,
            description: 'Do not use for real projects. Not recommended, unstable, and will be rewritten/remade entirely at a later date. In development.',
            featured: true,
            extensionWarningOnImport: true
        },
        {
            name: '3D Physics',
            extensionId: 'fr3d',
            iconURL: fr3dPhysicsExtensionIcon,
            tags: ['penguinmod', '3d'],
            customInsetColor: '#D066FE',
            insetIconURL: fr3dPhysicsInsetExtensionIcon,
            description: 'Physics for the 3D extension.',
            featured: true
        },
        {
            name: '3D Virtual Reality',
            extensionId: 'jg3dVr',
            iconURL: jg3dVrExtensionIcon,
            tags: ['penguinmod', 'hardware', '3d'],
            customInsetColor: '#B200FF',
            insetIconURL: jg3dVrInsetExtensionIcon,
            description: 'Do not use for real projects. Not recommended, unstable, and will be rewritten/remade entirely at a later date. In development. May break compatibility. Allow players to really jump into your world!',
            featured: true,
            extensionWarningOnImport: true
        },
        {
            name: 'Interfaces',
            extensionId: 'jgInterfaces',
            iconURL: jgsilvxrcatInterfacesExtensionIcon,
            credits: 'silvxrcat',
            tags: ['penguinmod'],
            description: 'In development.',
            featured: true
        },
        {
            name: 'Packager Applications',
            extensionId: 'jgPackagerApplications',
            iconURL: jgPackagerApplicationsExtensionIcon,
            insetIconURL: jgPackagerApplicationsInsetExtensionIcon,
            twDeveloper: 'CubesterYT',
            customInsetColor: '#66B8FF',
            tags: ['penguinmod', 'packager'],
            description: 'In development. Do extra things in packaged applications that you can\'t do in the website!',
            featured: true
        },

        {
            name: 'Inline Blocks',
            extensionId: 'pmInlineBlocks',
            iconURL: pmInlineBlocksExtensionIcon,
            tags: ['penguinmod'],
            description: 'Create quick blocks for simple tasks. Insert them into any circle spot and have them return any value you want.',
            featured: true
        },
        {
            name: (
                <FormattedMessage
                    defaultMessage="Pathfinding"
                    description="Name of Pathfinding extension"
                    id="jgPathfinding.Pathfinding.name"
                />
            ),
            extensionId: 'jgPathfinding',
            tags: ['penguinmod'],
            iconURL: jgPathfindingExtensionIcon,
            description: (
                <FormattedMessage
                    defaultMessage="(Unstable and or laggy; Needs further work) Have sprites navigate around obstacles in your game instead of clipping into them."
                    description="Description of Pathfinding extension"
                    id="jgPathfinding.Pathfinding.description"
                />
            ),
            featured: true
        },
        {
            name: 'Animation',
            extensionId: 'jgAnimation',
            iconURL: jgAnimationExtensionIcon,
            tags: ['penguinmod'],
            description: 'In development. Currently buggy and missing features.',
            featured: true
		},
		{
            name: 'Test Extension - potentiamod',
            extensionId: 'test',
            iconURL: potentiamodplaceholder,
            tags: ['potentia', 'othermods', 'dev'],
            description: 'A test extension to see if possible. For developers only.',
            featured: true,
		    extensionWarning: true
        },
        {
            name: 'Virtual Reality',
            extensionId: 'jgVr',
            iconURL: jgVrExtensionIcon,
            tags: ['penguinmod', 'hardware'],
            description: 'In development.',
            extDeveloper: "JeremyGamer13",
            extraLabels: [
                {
                    name: "Uses code from",
                    value: "\"Augmented Reality\" by Vadik1"
                }
            ],
            featured: true,
            extensionWarningOnImport: true
        }
    ];
if (Isfullversion) {
const AllExt = [
        {
            name: (
                <FormattedMessage
                    defaultMessage="HTML Canvas"
                    description="Name of Text extension"
                    id="canvas.name"
                />
            ),
            extensionId: 'newCanvas',
            iconURL: canvasExtensionBanner,
            tags: ['penguinmod'],
            insetIconURL: canvasExtensionIcon,
            customInsetColor: '#0094FF',
            description: (
                <FormattedMessage
                    defaultMessage="Extra drawing tools using an HTML Canvas. Works well when used with other extensions."
                    description="Description of Text extension"
                    id="text.description"
                />
            ),
            featured: true
        },
        {
            name: 'OLD Canvas',
            extensionId: 'canvas',
            iconURL: canvasExtensionBanner,
            tags: ['penguinmod'],
            insetIconURL: canvasExtensionIcon,
            customInsetColor: '#0094FF',
            description: 'depracated version of HTML Canvas.',
            featured: true
        },
        {
            name: 'Legacy Files',
            extensionId: 'jgFiles',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod', 'datamgmt'],
            description: 'Basic blocks for files. This has been replaced by the TurboWarp files extension.',
            featured: true
        },
        {
            name: 'Clone Communication',
            extensionId: 'jgClones',
            iconURL: jgCloneManagerExtensionIcon,
            tags: ['penguinmod'],
            description: 'Mainly sharing data between clones and the main sprite, but also some other small features. This has been replaced by the TurboWarp Clones+ extension.',
            featured: true
        },
        {
            name: 'Easy Save',
            extensionId: 'jgEasySave',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod', 'datamgmt'],
            description: 'Save variables, lists and extra info to a file, then load those things back in.',
            featured: true
        },
        {
            name: 'the doo doo extension',
            extensionId: 'jgDooDoo',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod', 'joke'],
            description: 'dr bob eae',
            featured: true
        },
        {
            name: 'an amazing extension',
            extensionId: 'jgBestExtension',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/epic.avif',
            internetConnectionRequired: true,
            tags: ['penguinmod', 'joke'],
            description: 'this is SUCH A GOOD EXTENSION USE IT NOW',
            featured: true
        },
        {
            name: 'Epic utilities',
            extensionId: 'https://extensions.penguinmod.com/extensions/SharkPool/AprilFools.js',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/epicutils.avif',
            tags: ['penguinmod', 'joke'],
            description: 'the super good utilities brought to you by todays sponsor sharkpool (the epic utilities)',
            featured: true
        },
        {
            name: 'image blocks',
            extensionId: 'https://extensions.penguinmod.com/extensions/Ashime/funneimageblocks.js',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/screenshot1.avif',
            tags: ['penguinmod', 'joke'],
            internetConnectionRequired: true,
            description: 'who needs cat blocks when you have penguin block',
            extDeveloper: 'Ashimee, 0znzw, CST1229',
            featured: true
        },
        {
            name: 'fire in the hole',
            extensionId: 'https://extensions.penguinmod.com/extensions/JeremyGamer13/FireInTheHole.js',
            iconURL: 'https://library.penguinmod.com/files/emojis/cluelesssmile.png',
            tags: ['penguinmod', 'joke'],
            internetConnectionRequired: true,
            description: 'april fools took too long man this joke is not funny anymore',
            featured: true
        },
        {
            name: 'Unite',
            extensionId: 'jwUnite',
            iconURL: jwUniteExtensionIcon,
            tags: ['penguinmod'],
            description: 'Legacy extension that was eventually merged into the default toolbox.',
            featured: true
        },
        {
            name: 'Debugging',
            extensionId: 'jgDebugging',
            iconURL: jgDebuggingIcon,
            tags: ['penguinmod'],
            description: 'Log information and run commands. Good for debugging packaged projects or just easily changing things.',
            featured: true
        },
        {
            name: 'Test Extension Loader',
            href: 'https://studio.penguinmod.com/loadExt.html',
            extensionId: 'special_testExtensionLibrary',
            iconURL: defaultExtensionIcon,
            description: 'Test loading extensions from a library. For developers.',
            featured: true
        },
        {
            name: 'Editor',
            href: 'https://studio.penguinmod.com/editor.html',
            extensionId: 'special_editorExtensionLibrary',
            iconURL: penguinmodLibraryExtensionIcon,
            description: 'Opens the editor with this tab as the parent, still with the library opened. For developers.',
            featured: true
        },
        {
            name: 'localhost:5173',
            href: 'http://localhost:5173',
            extensionId: 'special_extensionLibraryLocalhost5173',
            iconURL: defaultExtensionIcon,
            description: 'Opens localhost:5173 in a new tab with this tab as the parent. For developers',
            featured: true
        },
        {
            name: 'localhost:5173?editor=true',
            href: 'http://localhost:5173?editor=true',
            extensionId: 'special_extensionLibraryLocalhost5173EditorTrue',
            iconURL: defaultExtensionIcon,
            description: 'Opens localhost:5173 in a new tab with this tab as the parent. Sets ?editor=true. For developers',
            featured: true
        },
        {
            name: (
                <FormattedMessage
                    defaultMessage="OOP"
                    description="Name of OOP extension"
                    id="jwStructs.jwStructsExtension.name"
                />
            ),
            extensionId: 'jwStructs',
            tags: ['penguinmod'],
            iconURL: jwStructsExtensionIcon,
            description: (
                <FormattedMessage
                    defaultMessage="Removed from list. OOP blocks. OOp is a programming paradigm that uses objects and their interactions to design applications and computer programs."
                    description="Description of OOP extension"
                    id="jwStructs.jwStructsExtension.description"
                />
            ),
            featured: true
        },
        {
            name: 'PenguinMod Permissions',
            extensionId: 'JgPermissionBlocks',
            iconURL: jgPermissionExtensionIcon,
            tags: ['penguinmod'],
            description: 'Legacy extension, old blocks no longer serve a real purpose. Direct blocks to manage permissions that PenguinMod requires you have to do certain tasks.',
            featured: true
        },
        {
            name: 'Jeremys Dev Tools',
            extensionId: 'jgDev',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod'],
            description: 'Test extension to see if things are possible.\nDO NOT USE THIS IN PRODUCTION as blocks are subject to change and may corrupt your projects.',
            credits: 'Some features added from LilyMakesThings, CubesterYT, TheShovel',
            featured: true
        },
        {
            name: '3D',
            extensionId: 'jg3d',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod', '3d'],
            customInsetColor: '#B200FF',
            insetIconURL: jg3dInsetExtensionIcon,
            description: 'Do not use for real projects. Not recommended, unstable, and will be rewritten/remade entirely at a later date. In development.',
            featured: true,
            extensionWarningOnImport: true
        },
        {
            name: '3D Physics',
            extensionId: 'fr3d',
            iconURL: fr3dPhysicsExtensionIcon,
            tags: ['penguinmod', '3d'],
            customInsetColor: '#D066FE',
            insetIconURL: fr3dPhysicsInsetExtensionIcon,
            description: 'Physics for the 3D extension.',
            featured: true
        },
        {
            name: '3D Virtual Reality',
            extensionId: 'jg3dVr',
            iconURL: jg3dVrExtensionIcon,
            tags: ['penguinmod', 'hardware', '3d'],
            customInsetColor: '#B200FF',
            insetIconURL: jg3dVrInsetExtensionIcon,
            description: 'Do not use for real projects. Not recommended, unstable, and will be rewritten/remade entirely at a later date. In development. May break compatibility. Allow players to really jump into your world!',
            featured: true,
            extensionWarningOnImport: true
        },
        {
            name: 'Interfaces',
            extensionId: 'jgInterfaces',
            iconURL: jgsilvxrcatInterfacesExtensionIcon,
            credits: 'silvxrcat',
            tags: ['penguinmod'],
            description: 'In development.',
            featured: true
        },
        {
            name: 'Packager Applications',
            extensionId: 'jgPackagerApplications',
            iconURL: jgPackagerApplicationsExtensionIcon,
            insetIconURL: jgPackagerApplicationsInsetExtensionIcon,
            twDeveloper: 'CubesterYT',
            customInsetColor: '#66B8FF',
            tags: ['penguinmod', 'packager'],
            description: 'In development. Do extra things in packaged applications that you can\'t do in the website!',
            featured: true
        },

    extras.forEach(ext => {
        menuItems.push(ext);
    });
}

	
export default menuItems;
