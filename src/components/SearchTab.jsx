import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container, Alert, Tabs, Tab } from "react-bootstrap";

import SearchBar from "../components/SearchBar";
import AssetGrid from "../components/AssetGrid";
import AssetContent from "../components/AssetContent";
import AssetDetail from "../components/AssetDetail";
import UsefulLink from "../components/UsefulLink";
import { searchAsset, getAssetDetail } from "../effects/searchAsset";

//const getSearchResultRemote =

export default function SearchTab(props) {
  const [page, setPage] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [assetList, setAssetList] = useState(assets);
  const [isSearched, setIsSearched] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { assets, relatedAssets, categories } = props;

  useEffect(() => {
    console.log("Search for:", searchKeyword);
    setIsLoading(true);
    searchAsset(searchKeyword)
      .then((response) => {
        setAssetList(response.items || response);
        setIsLoading(false);
        setIsSearched(false);
        //console.log(response);
      })
      .catch((error) => console.log(error));
  }, [isSearched]);

  const handleStartSearch = () => {
    setIsSearched(true);
  };
  const goToAssetDetail = () => {};
  return (
    <Container>
      <Row>
        <Col lg={10}>
          <SearchBar
            searchKeyword={searchKeyword}
            searchKeywordChange={(val) => setSearchKeyword(val)}
            onStartSearch={handleStartSearch}
            isSearched={isSearched}
          />
          <AssetGrid
            assets={assetList || []}
            goToAssetDetail={goToAssetDetail}
          />
          {/* <AssetDetail asset={assets[0]} />
            <AssetContent assets={[assets[0], assets[1]]} /> 
            <AssetGrid assets={relatedAssets} />
             <UsefulLink /> */}
        </Col>
        <Col lg={2}></Col>
      </Row>
    </Container>
  );
}
