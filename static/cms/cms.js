import React, { Component } from 'react';
import CMS from 'netlify-cms';

import { Template } from '../src/templates/gallery-post';

const GalleryPostPreview = ({ entry, widgetFor, widgetsFor }) =>(
    <Template
        title={entry.getIn(['data', 'title'])}
        html={widgetFor('body')}
        gallery={widgetsFor('galleryImages')}
        />
)

CMS.registerPreviewStyle('../src/layouts/normalize.css');
CMS.registerPreviewStyle('../src/layouts/swiper.min.css');
CMS.registerPreviewStyle('../src/layouts/index.css');
CMS.registerPreviewTemplate('gallery', GalleryPostPreview);
