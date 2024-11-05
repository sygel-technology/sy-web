import setuptools

with open('VERSION.txt', 'r') as f:
    version = f.read().strip()

setuptools.setup(
    name="odoo14-addons-sygel-technology-sy-web",
    description="Meta package for sygel-technology-sy-web Odoo addons",
    version=version,
    install_requires=[
        'odoo14-addon-remaining_days_widget_reformat_state',
        'odoo14-addon-web_company_logo',
    ],
    classifiers=[
        'Programming Language :: Python',
        'Framework :: Odoo',
        'Framework :: Odoo :: 14.0',
    ]
)
