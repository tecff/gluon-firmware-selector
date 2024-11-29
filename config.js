/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var config = {
  // list images on console that match no model
  listMissingImages: false,
  // see devices.js for different vendor model maps
  vendormodels: vendormodels,
  // set enabled categories of devices (see devices.js)
  enabled_device_categories: ["recommended"],
  // community prefix of the firmware images
  community_prefix: 'gluon-tecff-',
  // firmware version regex
  version_regex: /(v\d+(?:\.\d)*(?:-\d+-g[a-f\d]{7})?)/,
  // relative image paths and branch
  directories: {
    '../v12/stable/factory/': 'stable',
    '../v12/stable/other/': 'stable',
    '../v12/stable/sysupgrade/': 'stable',
    '../v12/beta/factory/': 'beta',
    '../v12/beta/other/': 'beta',
    '../v12/beta/sysupgrade/': 'beta',
    '../v12/experimental/factory/': 'experimental',
    '../v12/experimental/other/': 'experimental',
    '../v12/experimental/sysupgrade/': 'experimental'
  },
  // page title
  title: 'tecff Firmware Selector',
  // branch descriptions shown during selection
  branch_descriptions: {
    stable: 'Gut getestet, zuverlässig und stabil.',
    beta: 'Vorabtests neuer Stable-Kandidaten.',
    experimental: 'Ungetestet, automatisch generiert.'
  },
  // recommended branch will be marked during selection
  recommended_branch: 'stable',
  // experimental branches (show a warning for these branches)
  experimental_branches: ['experimental'],
  // path to preview pictures directory
  preview_pictures: 'pictures/',
  // link to changelog
  changelog: 'https://github.com/tecff/site-ffa/blob/stable/CHANGELOG.md'
};
