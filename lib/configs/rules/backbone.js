// see https://github.com/ilyavolodin/eslint-plugin-backbone

module.exports = {
	// Require all collections to declare model
	'backbone/collection-model': 'error',
	// Require defaults to be on top of the model
	'backbone/defaults-on-top': 'warn',
	// Verify that scope is passed into event handlers
	'backbone/event-scope': 'warn',
	// Events should be the first thing registered in the View
	'backbone/events-on-top': ['warn', ['tagName', 'className']],
	// Requires initialize to be the first property of Backbone Views/Models/Collections
	'backbone/initialize-on-top': ['warn', {
		View: ['tagName', 'className', 'events'],
		Model: ['defaults', 'url', 'urlRoot'],
		Collection: ['model', 'url'],
	}],
	// Require all models to have defaults section
	'backbone/model-defaults': 'error',
	// Prevent setting changed attribute of the model in views
	'backbone/no-changed-set': 'error',
	// Prevent access to models property of collections
	'backbone/no-collection-models': 'error',
	// Prevent overloading of constructor
	'backbone/no-constructor': 'warn',
	// Prevent assigning el or $el inside views
	'backbone/no-el-assign': 'error',
	// Prevent access to attributes collection inside models
	'backbone/no-model-attributes': 'error',
	// Prevent usage of $ in the views
	'backbone/no-native-jquery': ['warn', 'selector'],
	// Prevent using silent option in functions that cause events
	'backbone/no-silent': 'warn',
	// Prevent access to collection's models property inside views
	'backbone/no-view-collection-models': 'error',
	// Prevent access to model's attributes collection inside views
	'backbone/no-view-model-attributes': 'error',
	// Prevent using on/off bindings inside views
	'backbone/no-view-onoff-binding': 'error',
	// Prevent usage of global $ to reach view elements
	'backbone/no-view-qualified-jquery': 'off',
	// Enforces render function to always return this
	'backbone/render-return': 'error',
};
