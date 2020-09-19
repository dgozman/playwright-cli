/*
  Copyright (c) Microsoft Corporation.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import './workbench.css';
import { dom } from '../components/dom';
import { TraceModel } from '../../traceModel';
import { PropertiesTabbedPane } from './propertiesTabbedPane';
import { ActionListView } from './actionListView';
import { VideoListView } from './videoListView';

export class Workbench {
  element: HTMLElement;

  constructor(trace: TraceModel) {
    const context = trace.contexts[0];
    const size = context.created.viewportSize!;
    const tabbedPane = new PropertiesTabbedPane(size);
    const actionListView = new ActionListView(context, tabbedPane);
    const videoListView = new VideoListView(context);

    this.element = dom`
      <vbox class="workbench">
        <hbox class="header">
          <div class="logo">🎭</div>
          <div class="product">Playwright</div>
        </hbox>
        ${videoListView.element}
        <hbox>
          ${actionListView.element}
          ${tabbedPane.element}
        </hbox>
      </vbox>
    `;
  }
}
