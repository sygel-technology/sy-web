/** @odoo-module **/

import {formatDate, formatDateTime} from "@web/core/l10n/dates";
import {Component} from "@odoo/owl";
import {DateTimeField} from "@web/views/fields/datetime/datetime_field";
import {_t} from "@web/core/l10n/translation";
import {localization} from "@web/core/l10n/localization";
import {registry} from "@web/core/registry";
import {standardFieldProps} from "@web/views/fields/standard_field_props";

const {DateTime} = luxon;

export class RemainingDaysFieldReformatState extends Component {
    static components = {DateTimeField};

    static props = {
        ...standardFieldProps,
        reformat: {type: Boolean, optional: true},
        reformat_state: {type: Array, optional: true},
    };

    static template =
        "web_widget_remaining_days_reformat_state.RemainingDaysFieldReformatState";

    get diffDays() {
        const {record, name} = this.props;
        const value = record.data[name];
        if (!value) {
            return null;
        }
        const today = DateTime.local().startOf("day");
        const diff = value.startOf("day").diff(today, "days");
        return Math.floor(diff.days);
    }

    get diffString() {
        if (this.diffDays === null) {
            return "";
        }
        switch (this.diffDays) {
            case -1:
                return _t("Yesterday");
            case 0:
                return _t("Today");
            case 1:
                return _t("Tomorrow");
        }
        if (Math.abs(this.diffDays) > 99) {
            return this.formattedValue;
        }
        if (this.diffDays < 0) {
            return _t("%s days ago", -this.diffDays);
        }
        return _t("In %s days", this.diffDays);
    }

    get formattedValue() {
        const {record, name} = this.props;
        return record.fields[name].type === "datetime"
            ? formatDateTime(record.data[name], {format: localization.dateFormat})
            : formatDate(record.data[name]);
    }

    get shouldReformat() {
        if (!this.props.reformat) {
            return false;
        }
        if (!this.props.reformat_states) {
            return false;
        }
        const state = this.props.record.data.state;
        return this.props.reformat_states.includes(state);
    }

    get cssClass() {
        if (this.shouldReformat) {
            return "";
        }
        const days = this.diffDays;
        return {
            "fw-bold": days !== null && days <= 0,
            "text-danger": days !== null && days < 0,
            "text-warning": days !== null && days === 0,
        };
    }
}

export const remainingDaysFieldReformatState = {
    component: RemainingDaysFieldReformatState,
    displayName: _t("Remaining Days - Reformat State"),
    supportedOptions: [
        {
            label: _t("Reformat"),
            name: "reformat",
            type: "boolean",
        },
        {
            label: _t("Reformat State"),
            name: "reformat_states",
            type: "array",
        },
    ],
    supportedTypes: ["date", "datetime"],
    extractProps: ({options}) => ({
        reformat: options.reformat,
        reformat_states: options.reformat_states,
    }),
};

registry
    .category("fields")
    .add("remaining_days_reformat_state", remainingDaysFieldReformatState);
