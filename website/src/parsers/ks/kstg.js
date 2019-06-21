import React from 'react';
import defaultParserInterface from '../js/utils/defaultESTreeParserInterface';
import pkg from 'kstg/package.json';

const ID = 'kstg';

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: pkg.version,
  homepage: pkg.homepage,

  loadParser(callback) {
    require(['kstg'], callback);
  },

  parse(kstg, code, options) {
    return kstg.parse(code, options);
  },

  nodeToRange(node) {
    if (typeof node.start === 'number') {
      return [node.start, node.end];
    }
  },

  getDefaultOptions() {
    return {/*
      module: false,
      loc: false,
      ranges: false,
      globalReturn: false,
      skipShebang: false,
      impliedStrict: false,
      next: false,
      jsx: false,
      tolerant: false,
      // source: '',
      experimental: false,
      raw: false,
      rawIdentifier: false,
      node: false,*/
    };
  },

  _getSettingsConfiguration() {

    return {
      fields: [/*
        'module',
        'loc',
        'ranges',
        'globalReturn',
        'skipShebang',
        'impliedStrict',
        'next',
        'jsx',
        'tolerant',
        // 'source',
        'experimental',
        'raw',
        'rawIdentifier',
        'node',*/
      ],
    };
  },

  renderSettings(parserSettings, onChange) {
    return (
      <div>
        <p>
          <a
            href="https://github.com/komsomolskinari/kstg"
            target="_blank" rel="noopener noreferrer">
            KSTG Source
          </a>
        </p>
        {defaultParserInterface.renderSettings.call(
          this,
          parserSettings,
          onChange
        )}
      </div>
    );
  },
};
