"""
Polkadot Wiki Macro functionality
"""

import substrateinterface

def get_network_url(network):
    match network:
        case "polkadot":
            return "wss://rpc-polkadot.luckyfriday.io"
        case "kusama":
            return "wss://rpc-kusama.luckyfriday.io"
        case "polkadot-assethub":
            return "wss://rpc-asset-hub-polkadot.luckyfriday.io"
        case "kusama-assethub":
            return "wss://rpc-asset-hub-kusama.luckyfriday.io"
        case "polkadot-people":
            return "wss://rpc-people-polkadot.luckyfriday.io"
        case "kusama-people":
            return "wss://rpc-people-kusama.luckyfriday.io"
        
def human_readable(decimals_amount, number):
    balance_str = str(number)
    if len(balance_str) <= decimals_amount:
        # Add leading zeros if necessary
        padded_balance = "0" * (decimals_amount - len(balance_str)) + balance_str
        return f"0.{padded_balance}" 
    else:
        # Split the string at the decimal point
        whole_part = balance_str[:-decimals_amount]
        decimal_part = balance_str[-decimals_amount:]
        return f"{whole_part}.{decimal_part}"

def define_env(env):
    @env.macro
    def rpc(network, module, call, default_value, is_constant=False):
        url = get_network_url(network)
        api = substrateinterface.SubstrateInterface(url)
        result = None
        if is_constant:
            result = api.get_constant(module, call)
        else:
            result = api.query(module, call)
        if result.value == None:
            return default_value
        return human_readable(10, result.value)