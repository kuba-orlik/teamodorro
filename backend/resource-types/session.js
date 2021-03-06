var Sealious = require("sealious");

var session = new Sealious.ResourceType({
	name: "session",
	fields: [
		{name: "last_changed_timestamp", type: "datetime"},
		{name: "work_duration", type: "int"},
		{name: "break_duration", type: "int"},
		{name: "slug", required: true, type: "unique_among", params: {resource_type: "session", field_name: "slug"}},
		{name: "current_state", type: "session_state"}
	],
	access_strategy: "public"
})


module.exports = session;
