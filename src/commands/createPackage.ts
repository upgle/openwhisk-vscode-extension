/**
 * Copyright 2020-present NAVER Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as vscode from 'vscode';
import { WskNamespace } from '../wskEntity';

export async function createPackage(namespace: WskNamespace): Promise<void> {
    const packageName = await vscode.window.showInputBox({
        ignoreFocusOut: true,
        prompt: 'Create new package',
        placeHolder: 'Enter package name here',
    });
    if (packageName) {
        await namespace.client.packages.create({
            name: packageName,
        });
    }
}