"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userCrud = {
    ALLOW_REMOVE_USER: { name: "ALLOW_REMOVE_USER", value: Math.pow(2, 0) },
    ALLOW_VIEW_USERS: { name: "ALLOW_VIEW_USERS", value: Math.pow(2, 1) },
};
const keyCrud = {
    ALLOW_ADD_REMOVE_KEYS: {
        name: "ALLOW_ADD_REMOVE_KEYS",
        value: Math.pow(2, 2),
    },
    ALLOW_VIEW_KEYS: { name: "ALLOW_VIEW_KEYS", value: Math.pow(2, 3) },
};
const studentUnionCrud = {
    ALLOW_ADD_EDIT_REMOVE_STUDENT_UNIONS: {
        name: "ALLOW_ADD_EDIT_REMOVE_STUDENT_UNIONS",
        value: Math.pow(2, 4),
    },
    ALLOW_VIEW_STUDENT_UNIONS: {
        name: "ALLOW_VIEW_STUDENT_UNIONS",
        value: Math.pow(2, 5),
    },
};
const calendarCrud = {
    ALLOW_ADD_EDIT_REMOVE_EVENTS: {
        name: "ALLOW_ADD_EDIT_REMOVE_EVENTS",
        value: Math.pow(2, 6),
    },
    ALLOW_VIEW_EVENTS: { name: "ALLOW_VIEW_EVENTS", value: Math.pow(2, 7) },
};
const ruleCrud = {
    ALLOW_ADD_EDIT_REMOVE_RULES: {
        name: "ALLOW_ADD_EDIT_REMOVE_RULES",
        value: Math.pow(2, 8),
    },
    ALLOW_VIEW_RULES: { name: "ALLOW_VIEW_RULES", value: Math.pow(2, 9) },
};
const newspostCrud = {
    ALLOW_ADD_EDIT_REMOVE_POSTS: {
        name: "ALLOW_ADD_EDIT_REMOVE_POSTS",
        value: Math.pow(2, 10),
    },
    ALLOW_VIEW_POSTS: { name: "ALLOW_VIEW_POSTS", value: Math.pow(2, 11) },
};
const locationCrud = {
    ALLOW_ADD_EDIT_REMOVE_LOCATIONS: {
        name: "ALLOW_ADD_EDIT_REMOVE_LOCATIONS",
        value: Math.pow(2, 12),
    },
    ALLOW_VIEW_LOCATIONS: {
        name: "ALLOW_VIEW_LOCATIONS",
        value: Math.pow(2, 13),
    },
};
const messageCrud = {
    ALLOW_ADD_EDIT_REMOVE_MESSAGES: {
        name: "ALLOW_ADD_EDIT_REMOVE_MESSAGES",
        value: Math.pow(2, 14),
    },
    ALLOW_VIEW_LOCATIONS: {
        name: "ALLOW_VIEW_MESSAGES",
        value: Math.pow(2, 15),
    },
};
const permissionCrud = {
    ALLOW_ADD_EDIT_REMOVE_PERMISSIONS: {
        name: "ALLOW_ADD_EDIT_REMOVE_PERMISSIONS",
        value: Math.pow(2, 16),
    },
    ALLOW_VIEW_PERMISSIONS: {
        name: "ALLOW_VIEW_PERMISSIONS",
        value: Math.pow(2, 17),
    },
};
const permissions = Object.assign({}, userCrud, keyCrud, studentUnionCrud, calendarCrud, ruleCrud, newspostCrud, locationCrud, messageCrud, permissionCrud);
exports.default = permissions;
