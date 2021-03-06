/*
 * This file is part of react-svg-buttons.
 *
 * (c) Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
export default (origin, radius) => ({
    circleDashOffset: 0,
    circleRotation: 0,
    circleOpacity: 1,

    barsRotation: 90,

    bar0X1: origin - radius * 0.1,
    bar0X2: origin - radius * 0.15,
    bar0X3: origin + radius * 0.7,
    bar0Y1: origin,
    bar0Y2: origin - radius * 0.4,
    bar0Y3: origin + radius * 0.1,
    bar0Opacity: 1,
    bar0Rotation: 0,

    bar1X1: origin - radius * 0.6,
    bar1X2: origin,
    bar1X3: origin + radius * 0.7,
    bar1Y1: origin,
    bar1Y2: origin,
    bar1Y3: origin,
    bar1Opacity: 0,
    bar1Rotation: 0,

    bar2X1: origin + radius * 0.15,
    bar2X2: origin + radius * 0.1,
    bar2X3: origin + radius * 0.7,
    bar2Y1: origin + radius * 0.45,
    bar2Y2: origin,
    bar2Y3: origin + radius * 0.1,
    bar2Opacity: 1,
    bar2Rotation: 0,

    sparksRotation: 0,

    spark0X1: origin - radius * 0.2,
    spark0X2: origin + radius * 0.3,
    spark0Y1: origin - radius * 0.6,
    spark0Y2: origin - radius * 0.6,
    spark0Opacity: 1,
    spark0Rotation: 0,

    spark1X1: origin + radius * 0.3,
    spark1X2: origin,
    spark1Y1: origin - radius * 0.6,
    spark1Y2: origin - radius * 0.1,
    spark1Opacity: 1,
    spark1Rotation: 0,

    spark2X1: origin,
    spark2X2: origin,
    spark2Y1: origin,
    spark2Y2: origin,
    spark2Opacity: 0,
    spark2Rotation: 0,

    spark3X1: origin - radius * 0.2,
    spark3X2: origin - radius * 0.45,
    spark3Y1: origin - radius * 0.6,
    spark3Y2: origin + radius * 0.15,
    spark3Opacity: 1,
    spark3Rotation: 0,
})
