/**
 * Nextcloud - Tasks
 *
 * @copyright Copyright (c) 2020 Georg Ehrke
 *
 * @author Georg Ehrke <oc.list@georgehrke.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

const fs = require('fs')

/**
 * global helper function to load an ics asset by name
 *
 * @param {string} assetName The asset to load
 * @return {string}
 */
const loadICS = (assetName) => {
	return fs.readFileSync('tests/assets/ics/' + assetName + '.ics', 'UTF8')
}

export {
	loadICS,
}