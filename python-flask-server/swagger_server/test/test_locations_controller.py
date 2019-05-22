# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.location import Location  # noqa: E501
from swagger_server.test import BaseTestCase


class TestLocationsController(BaseTestCase):
    """LocationsController integration test stubs"""

    def test_add_place(self):
        """Test case for add_place

        Add a new place to the database
        """
        body = Location()
        response = self.client.open(
            '/v2/locations',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_places(self):
        """Test case for get_places

        Gets list of location objects
        """
        query_string = [('category', '')]
        response = self.client.open(
            '/v2/locations',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_update_place(self):
        """Test case for update_place

        Edit an existing place
        """
        body = Location()
        response = self.client.open(
            '/v2/locations',
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
