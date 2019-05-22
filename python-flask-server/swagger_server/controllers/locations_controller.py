import connexion
import six

from swagger_server.models.location import Location  # noqa: E501
from swagger_server import util


def add_place(body):  # noqa: E501
    """Add a new place to the database

     # noqa: E501

    :param body: Location object that needs to be added to the database
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Location.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def get_places(category=None):  # noqa: E501
    """Gets list of location objects

    Multiple places can be provided in a single json # noqa: E501

    :param category: Category values to filter
    :type category: List[str]

    :rtype: List[Location]
    """
    return 'do some magic!'


def update_place(body):  # noqa: E501
    """Edit an existing place

     # noqa: E501

    :param body: Place object that needs to be added to the database
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Location.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
