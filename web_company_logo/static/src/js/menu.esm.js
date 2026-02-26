import {Component, onWillStart, useState} from "@odoo/owl";
import {registry} from "@web/core/registry";
import {useService} from "@web/core/utils/hooks";

export class WebCompanyLogo extends Component {
    static template = "WebCompanyLogo";
    static props = {};
    setup() {
        this.company = useService("company");
        this.state = useState({hasLogo: false, logoUrl: ""});

        onWillStart(async () => {
            const companyId = this.company.activeCompanyIds[0];
            const url = window.location.origin;
            const response = await fetch(
                `${url}/check_company_logo?company_id=${companyId}`,
                {method: "GET"}
            );
            const result = await response.json();
            if (result.has_logo) {
                this.state.hasLogo = true;
                this.state.logoUrl = `${url}/web/image?model=res.company&id=${companyId}&field=logo`;
            }
        });
    }
}
WebCompanyLogo.template = "web_company_logo.WebCompanyLogo";
registry
    .category("systray")
    .add("web_company_logo", {Component: WebCompanyLogo}, {sequence: 1000});
