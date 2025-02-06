"""
Polkadot Wiki Macro functionality
"""

import substrateinterface
import os

def enable_rpc():
    return os.environ["ENABLE_RPC"] == "true"

def format(value, filter):
    match filter:
        case "percentage":
            return f"{value / 10000}%"
        case "human_readable":
            return human_readable(10, value)
        case "human_readable_kusama":
            return human_readable(12, value)
        case "blocks_to_days":
            return str(blocks_to_days(value))
        case _:
            return str(value)
        
def blocks_to_days(blocks): 
    return (blocks * 6) / 86400

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
    def rpc(network, module, call, default_value, is_constant=False, readable=""):
        if enable_rpc():
            url = get_network_url(network)
            api = substrateinterface.SubstrateInterface(url)
            result = None
            if is_constant:
                result = api.get_constant(module, call)
            else:
                result = api.query(module, call)
            if result == None or result.value == None:
                return "NOT_FOUND"
            return format(result.value, readable)
        else:
            return "DEV_MODE"