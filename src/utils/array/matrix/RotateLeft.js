/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

var RotateMatrix = require('./RotateMatrix');

/**
 * Rotates the array matrix to the left (or 90 degrees)
 *
 * @function Phaser.Utils.Array.Matrix.RotateLeft
 * @since 3.0.0
 *
 * @generic T
 * @genericUse {T[][]} - [matrix,$return]
 *
 * @param {T[][]} [matrix] - The array to rotate.
 *
 * @return {T[][]} The rotated matrix array. The source matrix should be discard for the returned matrix.
 */
var RotateLeft = function (matrix)
{
    return RotateMatrix(matrix, 90);
};

module.exports = RotateLeft;
