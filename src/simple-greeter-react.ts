'use client';

import React from 'react';
import {createComponent} from '@lit/react';
import {SimpleGreeter} from './simple-greeter';

export default createComponent({
  react: React,
  tagName: 'simple-greeter',
  elementClass: SimpleGreeter,
});
