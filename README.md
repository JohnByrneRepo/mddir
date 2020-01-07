
# Mddir

Generate a Markdown folder structure of your project for README files.

## Installation

Currently due to an issue with NPM on some platforms, global installation will fail. However, the yarn command handles this very gracefully, and, should be used in cases of global installation of Mddir.

### Using Yarn

    yarn global add mddir
    yarn add mddir

### Using NPM
    npm install mddir --save

### Usage
The Mddir generator can accept any path variant you provide. The generated Markdown file will be placed in your current working directory. Mddir currently ignores node_modules and .git folders by default.

    mddir /path
    mddir ../path
    mddir ~/

#### Example Output
Example generated Markdown file structure stored in directoryList.md

```
|-- kibana
    |-- .bowerrc
    |-- .gitignore
    |-- .jshintrc
    |-- .travis.yml
    |-- CONTRIBUTING.md
    |-- FAQ.md
    |-- Gruntfile.js
    |-- LICENSE.md
    |-- README.md
    |-- STYLEGUIDE.md
    |-- bower.json
    |-- package.json
    |-- docs
    |   |-- access.asciidoc
    |   |-- dashboard.asciidoc
    |   |-- discover.asciidoc
    |   |-- index.asciidoc
    |   |-- introduction.asciidoc
    |   |-- production.asciidoc
    |   |-- settings.asciidoc
    |   |-- setup.asciidoc
    |   |-- visualize.asciidoc
    |   |-- whats-new.asciidoc
    |   |-- images
    |       |-- AddFieldButton.jpg
    |       |-- AddVis.png
    |       |-- Clipboard.png
    |       |-- CollapseButton.jpg
    |       |-- Discover-FieldStats.jpg
    |       |-- Discover-MoveColumn.jpg
    |       |-- Discover-New-Search.jpg
    |       |-- Discover-Start-Annotated.jpg
    |       |-- Discover-Start.jpg
    |       |-- Discover-TimeFilter.jpg
    |       |-- Discover-TimePicker.jpg
    |       |-- EditVis.png
    |       |-- ExpandButton.jpg
    |       |-- K4NewDocument.png
    |       |-- K4Refresh.png
    |       |-- LoadButton.jpg
    |       |-- NYCTA-Dashboard.jpg
    |       |-- NYCTA-Request.jpg
    |       |-- NYCTA-Response.jpg
    |       |-- NYCTA-Statistics.jpg
    |       |-- NYCTA-Table.jpg
    |       |-- NegativeFilter.jpg
    |       |-- NewDashboard.jpg
    |       |-- NewViz01.jpg
    |       |-- PositiveFilter.jpg
    |       |-- RemoveFieldButton.jpg
    |       |-- SaveButton.jpg
    |       |-- SavedViz.png
    |       |-- SettingsButton.jpg
    |       |-- Start-Page.jpg
    |       |-- TFL-BakerStreet.jpg
    |       |-- TFL-CommuteHistogram.jpg
    |       |-- TFL-CompletedTrips.jpg
    |       |-- TFL-Dashboard.jpg
    |       |-- TimeFilter.jpg
    |       |-- VisNYCTA.png
    |       |-- VizEditor.jpg
    |-- src
    |   |-- .jshintrc
    |   |-- kibana
    |   |   |-- index.html
    |   |   |-- index.js
    |   |   |-- require.config.js
    |   |   |-- components
    |   |   |   |-- bind.js
    |   |   |   |-- errors.js
    |   |   |   |-- listen.js
    |   |   |   |-- reflow_watcher.js
    |   |   |   |-- watch_multi.js
    |   |   |   |-- agg_response
    |   |   |   |   |-- index.js
    |   |   |   |   |-- geo_json
    |   |   |   |   |   |-- _read_rows.js
    |   |   |   |   |   |-- geo_json.js
    |   |   |   |   |-- hierarchical
    |   |   |   |   |   |-- _array_to_linked_list.js
    |   |   |   |   |   |-- _build_split.js
    |   |   |   |   |   |-- _collect_branch.js
    |   |   |   |   |   |-- _collect_keys.js
    |   |   |   |   |   |-- _create_raw_data.js
    |   |   |   |   |   |-- _extract_buckets.js
    |   |   |   |   |   |-- _hierarchical_tooltip_formatter.js
    |   |   |   |   |   |-- _tooltip.html
    |   |   |   |   |   |-- _transform_aggregation.js
    |   |   |   |   |   |-- build_hierarchical_data.js
    |   |   |   |   |-- point_series
    |   |   |   |   |   |-- _add_to_siri.js
    |   |   |   |   |   |-- _fake_x_aspect.js
    |   |   |   |   |   |-- _get_aspects.js
    |   |   |   |   |   |-- _get_point.js
    |   |   |   |   |   |-- _get_series.js
    |   |   |   |   |   |-- _init_x_axis.js
    |   |   |   |   |   |-- _init_y_axis.js
    |   |   |   |   |   |-- _ordered_date_axis.js
    |   |   |   |   |   |-- _tooltip.html
    |   |   |   |   |   |-- _tooltip_formatter.js
    |   |   |   |   |   |-- point_series.js
    |   |   |   |   |-- tabify
    |   |   |   |       |-- _buckets.js
    |   |   |   |       |-- _get_columns.js
    |   |   |   |       |-- _response_writer.js
    |   |   |   |       |-- _table.js
    |   |   |   |       |-- _table_group.js
    |   |   |   |       |-- tabify.js
    |   |   |   |-- agg_table
    |   |   |   |   |-- agg_table.html
    |   |   |   |   |-- agg_table.js
    |   |   |   |   |-- agg_table.less
    |   |   |   |   |-- agg_table_group.html
    |   |   |   |   |-- agg_table_group.js
    |   |   |   |-- agg_types
    |   |   |   |   |-- README.md
    |   |   |   |   |-- _agg_params.js
    |   |   |   |   |-- _agg_type.js
    |   |   |   |   |-- index.js
    |   |   |   |   |-- buckets
    |   |   |   |   |   |-- _bucket_agg_type.js
    |   |   |   |   |   |-- _bucket_count_between.js
    |   |   |   |   |   |-- _interval_options.js
    |   |   |   |   |   |-- date_histogram.js
    |   |   |   |   |   |-- filters.js
    |   |   |   |   |   |-- geo_hash.js
    |   |   |   |   |   |-- histogram.js
    |   |   |   |   |   |-- range.js
    |   |   |   |   |   |-- significant_terms.js
    |   |   |   |   |   |-- terms.js
    |   |   |   |   |   |-- create_filter
    |   |   |   |   |       |-- date_histogram.js
    |   |   |   |   |       |-- filters.js
    |   |   |   |   |       |-- histogram.js
    |   |   |   |   |       |-- range.js
    |   |   |   |   |       |-- terms.js
    |   |   |   |   |-- controls
    |   |   |   |   |   |-- _percent_list.js
    |   |   |   |   |   |-- extended_bounds.html
    |   |   |   |   |   |-- field.html
    |   |   |   |   |   |-- filters.html
    |   |   |   |   |   |-- interval.html
    |   |   |   |   |   |-- min_doc_count.html
    |   |   |   |   |   |-- order_agg.html
    |   |   |   |   |   |-- order_and_size.html
    |   |   |   |   |   |-- percents.html
    |   |   |   |   |   |-- precision.html
    |   |   |   |   |   |-- ranges.html
    |   |   |   |   |   |-- raw_json.html
    |   |   |   |   |   |-- regular_expression.html
    |   |   |   |   |   |-- string.html
    |   |   |   |   |-- metrics
    |   |   |   |   |   |-- _get_response_agg_config.js
    |   |   |   |   |   |-- _metric_agg_type.js
    |   |   |   |   |   |-- avg.js
    |   |   |   |   |   |-- cardinality.js
    |   |   |   |   |   |-- count.js
    |   |   |   |   |   |-- max.js
    |   |   |   |   |   |-- min.js
    |   |   |   |   |   |-- percentiles.js
    |   |   |   |   |   |-- std_deviation.js
    |   |   |   |   |   |-- sum.js
    |   |   |   |   |-- param_types
    |   |   |   |       |-- base.js
    |   |   |   |       |-- field.js
    |   |   |   |       |-- optioned.js
    |   |   |   |       |-- raw_json.js
    |   |   |   |       |-- regex.js
    |   |   |   |       |-- string.js
    |   |   |   |-- clipboard
    |   |   |   |   |-- clipboard.html
    |   |   |   |   |-- clipboard.js
    |   |   |   |-- config
    |   |   |   |   |-- _delayed_updater.js
    |   |   |   |   |-- _vals.js
    |   |   |   |   |-- config.js
    |   |   |   |   |-- defaults.js
    |   |   |   |   |-- migrations
    |   |   |   |       |-- _empty_
    |   |   |   |-- courier
    |   |   |   |   |-- _error_handlers.js
    |   |   |   |   |-- _redirect_when_missing.js
    |   |   |   |   |-- _request_queue.js
    |   |   |   |   |-- courier.js
    |   |   |   |   |-- data_source
    |   |   |   |   |   |-- _abstract.js
    |   |   |   |   |   |-- _decorate_query.js
    |   |   |   |   |   |-- _doc_send_to_es.js
    |   |   |   |   |   |-- _root_search_source.js
    |   |   |   |   |   |-- doc_source.js
    |   |   |   |   |   |-- search_source.js
    |   |   |   |   |-- fetch
    |   |   |   |   |   |-- _call_client.js
    |   |   |   |   |   |-- _call_response_handlers.js
    |   |   |   |   |   |-- _continue_incomplete.js
    |   |   |   |   |   |-- _fetch_these.js
    |   |   |   |   |   |-- _for_each_strategy.js
    |   |   |   |   |   |-- _is_request.js
    |   |   |   |   |   |-- _merge_duplicate_requests.js
    |   |   |   |   |   |-- _notifier.js
    |   |   |   |   |   |-- _req_status.js
    |   |   |   |   |   |-- fetch.js
    |   |   |   |   |   |-- request
    |   |   |   |   |   |   |-- _error_handler.js
    |   |   |   |   |   |   |-- _segmented_handle.js
    |   |   |   |   |   |   |-- doc.js
    |   |   |   |   |   |   |-- request.js
    |   |   |   |   |   |   |-- search.js
    |   |   |   |   |   |   |-- segmented.js
    |   |   |   |   |   |-- strategy
    |   |   |   |   |       |-- doc.js
    |   |   |   |   |       |-- search.js
    |   |   |   |   |-- looper
    |   |   |   |   |   |-- _looper.js
    |   |   |   |   |   |-- doc.js
    |   |   |   |   |   |-- search.js
    |   |   |   |   |-- saved_object
    |   |   |   |       |-- saved_object.js
    |   |   |   |-- doc_table
    |   |   |   |   |-- doc_table.html
    |   |   |   |   |-- doc_table.js
    |   |   |   |   |-- doc_table.less
    |   |   |   |   |-- components
    |   |   |   |   |   |-- table_header.html
    |   |   |   |   |   |-- table_header.js
    |   |   |   |   |   |-- table_row.js
    |   |   |   |   |   |-- table_row
    |   |   |   |   |       |-- _source.html
    |   |   |   |   |       |-- cell.html
    |   |   |   |   |       |-- details.html
    |   |   |   |   |       |-- open.html
    |   |   |   |   |-- lib
    |   |   |   |       |-- get_sort.js
    |   |   |   |-- doc_title
    |   |   |   |   |-- doc_title.js
    |   |   |   |-- doc_viewer
    |   |   |   |   |-- doc_viewer.html
    |   |   |   |   |-- doc_viewer.js
    |   |   |   |   |-- doc_viewer.less
    |   |   |   |-- fancy_forms
    |   |   |   |   |-- fancy_forms.js
    |   |   |   |   |-- kbn_form.js
    |   |   |   |   |-- kbn_model.js
    |   |   |   |-- filter_bar
    |   |   |   |   |-- filter_bar.html
    |   |   |   |   |-- filter_bar.js
    |   |   |   |   |-- filter_bar.less
    |   |   |   |   |-- filter_bar_click_handler.js
    |   |   |   |   |-- lib
    |   |   |   |       |-- changeTimeFilter.js
    |   |   |   |       |-- dedupFilters.js
    |   |   |   |       |-- extractTimeFilter.js
    |   |   |   |       |-- filterAppliedAndUnwrap.js
    |   |   |   |       |-- filterOutTimeBasedFilter.js
    |   |   |   |       |-- generateMappingChain.js
    |   |   |   |       |-- invertAll.js
    |   |   |   |       |-- invertFilter.js
    |   |   |   |       |-- mapAndFlattenFilters.js
    |   |   |   |       |-- mapDefault.js
    |   |   |   |       |-- mapExists.js
    |   |   |   |       |-- mapFilter.js
    |   |   |   |       |-- mapFlattenAndWrapFilters.js
    |   |   |   |       |-- mapMissing.js
    |   |   |   |       |-- mapQueryString.js
    |   |   |   |       |-- mapRange.js
    |   |   |   |       |-- mapScript.js
    |   |   |   |       |-- mapTerms.js
    |   |   |   |       |-- onlyDisabled.js
    |   |   |   |       |-- remapFilters.js
    |   |   |   |       |-- removeAll.js
    |   |   |   |       |-- removeFilter.js
    |   |   |   |       |-- toggleAll.js
    |   |   |   |       |-- toggleFilter.js
    |   |   |   |       |-- uniqFilters.js
    |   |   |   |-- filter_manager
    |   |   |   |   |-- filter_manager.js
    |   |   |   |   |-- lib
    |   |   |   |       |-- phrase.js
    |   |   |   |       |-- query.js
    |   |   |   |       |-- range.js
    |   |   |   |-- highlight
    |   |   |   |   |-- highlight.js
    |   |   |   |   |-- highlight_tags.js
    |   |   |   |-- index_patterns
    |   |   |   |   |-- _cast_mapping_type.js
    |   |   |   |   |-- _ensure_some.js
    |   |   |   |   |-- _field_formats.js
    |   |   |   |   |-- _field_types.js
    |   |   |   |   |-- _flatten_hit.js
    |   |   |   |   |-- _flatten_search_response.js
    |   |   |   |   |-- _get_computed_fields.js
    |   |   |   |   |-- _get_ids.js
    |   |   |   |   |-- _index_pattern.js
    |   |   |   |   |-- _intervals.js
    |   |   |   |   |-- _local_cache.js
    |   |   |   |   |-- _map_field.js
    |   |   |   |   |-- _mapper.js
    |   |   |   |   |-- _pattern_cache.js
    |   |   |   |   |-- _pattern_to_wildcard.js
    |   |   |   |   |-- _transform_mapping_into_fields.js
    |   |   |   |   |-- index_patterns.js
    |   |   |   |-- notify
    |   |   |   |   |-- _errors.js
    |   |   |   |   |-- _notifier.js
    |   |   |   |   |-- directives.js
    |   |   |   |   |-- notify.js
    |   |   |   |   |-- partials
    |   |   |   |       |-- fatal.html
    |   |   |   |       |-- fatal_splash_screen.html
    |   |   |   |       |-- toaster.html
    |   |   |   |-- paginated_table
    |   |   |   |   |-- paginated_table.html
    |   |   |   |   |-- paginated_table.js
    |   |   |   |-- persisted_log
    |   |   |   |   |-- persisted_log.js
    |   |   |   |-- setup
    |   |   |   |   |-- _setup_error.js
    |   |   |   |   |-- setup.js
    |   |   |   |   |-- steps
    |   |   |   |       |-- check_es_version.js
    |   |   |   |       |-- check_for_es.js
    |   |   |   |       |-- check_for_kibana_index.js
    |   |   |   |       |-- create_kibana_index.js
    |   |   |   |-- state_management
    |   |   |   |   |-- _state_sync.js
    |   |   |   |   |-- app_state.js
    |   |   |   |   |-- global_state.js
    |   |   |   |   |-- state.js
    |   |   |   |-- storage
    |   |   |   |   |-- storage.js
    |   |   |   |-- style_compile
    |   |   |   |   |-- style_compile.css.tmpl
    |   |   |   |   |-- style_compile.js
    |   |   |   |-- time_buckets
    |   |   |   |   |-- calc_auto_interval.js
    |   |   |   |   |-- calc_es_interval.js
    |   |   |   |   |-- time_buckets.js
    |   |   |   |-- timepicker
    |   |   |   |   |-- quick_ranges.js
    |   |   |   |   |-- refresh_intervals.js
    |   |   |   |   |-- time_units.js
    |   |   |   |   |-- timepicker.html
    |   |   |   |   |-- timepicker.js
    |   |   |   |-- tooltip
    |   |   |   |   |-- tooltip.html
    |   |   |   |   |-- tooltip.js
    |   |   |   |-- typeahead
    |   |   |   |   |-- _input.js
```

## Todo
* Write Tests
* Add Grunt task/wrapper
* Read git ignore for folder ignore list

## Author
John Byrne <html5css3@outlook.com> (https://github.com/johnbyrnerepo)

## Contributors

Michael Cadelago (https://github.com/ex1machina)

Dan Stephenson (https://github.com/ispyhumanfly)

## Issues
[https://github.com/JohnByrneRepo/mddir/issues](https://github.com/JohnByrneRepo/mddir/issues)

## License
MIT
