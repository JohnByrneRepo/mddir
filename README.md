![Alt](/mddir.png "Title")

Mddir generates a markdown file/folder structure for readme files

https://www.npmjs.com/package/mddir

# Usage

node mddir "../relative/path/"

To install: npm install mddir -g

To generate markdown for current directory: mddir

To generate for any absolute path: mddir /absolute/path

To generate for a relative path: mddir ~/Documents/whatever.

The md file gets generated in your working directory.

Currently ignores node_modules, and .git folders.

Comments: html5css3@outlook.com

### Version
1.0.8


### Todo's

 - Write Tests
 - Add Grunt task/wrapper
 - Read git ignore for folder ignore list

License
----

MIT


**Free Software, Hell Yeah!**

*john byrne*: http://johnbyrne.info/



### Example generated markdown file structure 'directoryList.md'

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
    |   |   |   |   |-- _items.js
    |   |   |   |   |-- typeahead.js
    |   |   |   |   |-- typeahead.less
    |   |   |   |   |-- partials
    |   |   |   |       |-- typeahead-items.html
    |   |   |   |-- url
    |   |   |   |   |-- url.js
    |   |   |   |-- validate_query
    |   |   |   |   |-- validate_query.js
    |   |   |   |   |-- lib
    |   |   |   |       |-- from_user.js
    |   |   |   |       |-- to_user.js
    |   |   |   |-- vis
    |   |   |   |   |-- _agg_config.js
    |   |   |   |   |-- _agg_config_result.js
    |   |   |   |   |-- _agg_configs.js
    |   |   |   |   |-- vis.js
    |   |   |   |-- vislib
    |   |   |   |   |-- index.js
    |   |   |   |   |-- vis.js
    |   |   |   |   |-- components
    |   |   |   |   |   |-- color
    |   |   |   |   |   |   |-- color.js
    |   |   |   |   |   |   |-- color_palette.js
    |   |   |   |   |   |   |-- seed_colors.js
    |   |   |   |   |   |-- labels
    |   |   |   |   |   |   |-- data_array.js
    |   |   |   |   |   |   |-- flatten_series.js
    |   |   |   |   |   |   |-- labels.js
    |   |   |   |   |   |   |-- uniq_labels.js
    |   |   |   |   |   |-- tooltip
    |   |   |   |   |   |   |-- _position_tooltip.js
    |   |   |   |   |   |   |-- tooltip.js
    |   |   |   |   |   |-- zero_injection
    |   |   |   |   |       |-- flatten_data.js
    |   |   |   |   |       |-- inject_zeros.js
    |   |   |   |   |       |-- ordered_x_keys.js
    |   |   |   |   |       |-- uniq_keys.js
    |   |   |   |   |       |-- zero_fill_data_array.js
    |   |   |   |   |       |-- zero_filled_array.js
    |   |   |   |   |-- lib
    |   |   |   |   |   |-- _error_handler.js
    |   |   |   |   |   |-- alerts.js
    |   |   |   |   |   |-- axis_title.js
    |   |   |   |   |   |-- chart_title.js
    |   |   |   |   |   |-- data.js
    |   |   |   |   |   |-- dispatch.js
    |   |   |   |   |   |-- legend.js
    |   |   |   |   |   |-- resize_checker.js
    |   |   |   |   |   |-- x_axis.js
    |   |   |   |   |   |-- y_axis.js
    |   |   |   |   |   |-- handler
    |   |   |   |   |   |   |-- handler.js
    |   |   |   |   |   |   |-- handler_types.js
    |   |   |   |   |   |   |-- types
    |   |   |   |   |   |       |-- pie.js
    |   |   |   |   |   |       |-- point_series.js
    |   |   |   |   |   |       |-- tile_map.js
    |   |   |   |   |   |-- layout
    |   |   |   |   |       |-- layout.js
    |   |   |   |   |       |-- layout_types.js
    |   |   |   |   |       |-- splits
    |   |   |   |   |       |   |-- column_chart
    |   |   |   |   |       |   |   |-- chart_split.js
    |   |   |   |   |       |   |   |-- chart_title_split.js
    |   |   |   |   |       |   |   |-- x_axis_split.js
    |   |   |   |   |       |   |   |-- y_axis_split.js
    |   |   |   |   |       |   |-- pie_chart
    |   |   |   |   |       |   |   |-- chart_split.js
    |   |   |   |   |       |   |   |-- chart_title_split.js
    |   |   |   |   |       |   |-- tile_map
    |   |   |   |   |       |       |-- map_split.js
    |   |   |   |   |       |-- types
    |   |   |   |   |           |-- column_layout.js
    |   |   |   |   |           |-- map_layout.js
    |   |   |   |   |           |-- pie_layout.js
    |   |   |   |   |-- partials
    |   |   |   |   |   |-- legend_header.html
    |   |   |   |   |   |-- touchdown.tmpl.html
    |   |   |   |   |-- styles
    |   |   |   |   |   |-- _alerts.less
    |   |   |   |   |   |-- _error.less
    |   |   |   |   |   |-- _layout.less
    |   |   |   |   |   |-- _legend.less
    |   |   |   |   |   |-- _svg.less
    |   |   |   |   |   |-- _tilemap.less
    |   |   |   |   |   |-- _tooltip.less
    |   |   |   |   |   |-- main.less
    |   |   |   |   |-- visualizations
    |   |   |   |       |-- _chart.js
    |   |   |   |       |-- _point_series_chart.js
    |   |   |   |       |-- area_chart.js
    |   |   |   |       |-- column_chart.js
    |   |   |   |       |-- line_chart.js
    |   |   |   |       |-- pie_chart.js
    |   |   |   |       |-- tile_map.js
    |   |   |   |       |-- vis_types.js
    |   |   |   |-- visualize
    |   |   |       |-- visualize.html
    |   |   |       |-- visualize.js
    |   |   |       |-- visualize.less
    |   |   |       |-- spy
    |   |   |           |-- _req_resp_stats.html
    |   |   |           |-- _req_resp_stats.js
    |   |   |           |-- _spy.html
    |   |   |           |-- _table.html
    |   |   |           |-- _table.js
    |   |   |           |-- spy.js
    |   |   |-- directives
    |   |   |   |-- click_focus.js
    |   |   |   |-- config.js
    |   |   |   |-- confirm_click.js
    |   |   |   |-- css_truncate.js
    |   |   |   |-- field_name.js
    |   |   |   |-- fixed_scroll.js
    |   |   |   |-- greater_than.js
    |   |   |   |-- infinite_scroll.js
    |   |   |   |-- info.js
    |   |   |   |-- input_datetime.js
    |   |   |   |-- input_focus.js
    |   |   |   |-- input_whole_number.js
    |   |   |   |-- paginate.js
    |   |   |   |-- pretty_duration.js
    |   |   |   |-- rows.js
    |   |   |   |-- saved_object_finder.js
    |   |   |   |-- spinner.js
    |   |   |   |-- truncated.js
    |   |   |   |-- validate_index_name.js
    |   |   |   |-- validate_ip.js
    |   |   |   |-- validate_json.js
    |   |   |-- factories
    |   |   |   |-- base_object.js
    |   |   |   |-- events.js
    |   |   |-- filters
    |   |   |   |-- _prop_filter.js
    |   |   |   |-- field_type.js
    |   |   |   |-- label.js
    |   |   |   |-- match_any.js
    |   |   |   |-- moment.js
    |   |   |   |-- rison.js
    |   |   |   |-- short_dots.js
    |   |   |   |-- start_from.js
    |   |   |   |-- trust_as_html.js
    |   |   |   |-- unique.js
    |   |   |   |-- uriescape.js
    |   |   |-- images
    |   |   |   |-- initial_load.gif
    |   |   |   |-- no_border.png
    |   |   |-- partials
    |   |   |   |-- global_config.html
    |   |   |   |-- info.html
    |   |   |   |-- nav_config.html
    |   |   |   |-- paginate_controls.html
    |   |   |   |-- saved_object_finder.html
    |   |   |   |-- truncate_by_height.html
    |   |   |-- plugins
    |   |   |   |-- README.txt
    |   |   |   |-- dashboard
    |   |   |   |   |-- index.html
    |   |   |   |   |-- index.js
    |   |   |   |   |-- components
    |   |   |   |   |   |-- panel
    |   |   |   |   |       |-- panel.html
    |   |   |   |   |       |-- panel.js
    |   |   |   |   |       |-- lib
    |   |   |   |   |           |-- load_panel.js
    |   |   |   |   |           |-- search.js
    |   |   |   |   |           |-- visualization.js
    |   |   |   |   |-- directives
    |   |   |   |   |   |-- grid.js
    |   |   |   |   |-- partials
    |   |   |   |   |   |-- load_dashboard.html
    |   |   |   |   |   |-- pick_visualization.html
    |   |   |   |   |   |-- save_dashboard.html
    |   |   |   |   |   |-- share.html
    |   |   |   |   |-- services
    |   |   |   |   |   |-- _saved_dashboard.js
    |   |   |   |   |   |-- saved_dashboards.js
    |   |   |   |   |-- styles
    |   |   |   |       |-- main.less
    |   |   |   |-- discover
    |   |   |   |   |-- _hit_sort_fn.js
    |   |   |   |   |-- index.html
    |   |   |   |   |-- index.js
    |   |   |   |   |-- components
    |   |   |   |   |   |-- field_chooser
    |   |   |   |   |       |-- discover_field.html
    |   |   |   |   |       |-- discover_field.js
    |   |   |   |   |       |-- discover_field_details.html
    |   |   |   |   |       |-- field_chooser.html
    |   |   |   |   |       |-- field_chooser.js
    |   |   |   |   |       |-- lib
    |   |   |   |   |           |-- field_calculator.js
    |   |   |   |   |-- controllers
    |   |   |   |   |   |-- discover.js
    |   |   |   |   |-- directives
    |   |   |   |   |   |-- timechart.js
    |   |   |   |   |-- partials
    |   |   |   |   |   |-- load_search.html
    |   |   |   |   |   |-- save_search.html
    |   |   |   |   |   |-- settings.html
    |   |   |   |   |-- saved_searches
    |   |   |   |   |   |-- _saved_search.js
    |   |   |   |   |   |-- saved_searches.js
    |   |   |   |   |-- styles
    |   |   |   |       |-- main.less
    |   |   |   |-- doc
    |   |   |   |   |-- index.html
    |   |   |   |   |-- index.js
    |   |   |   |   |-- controllers
    |   |   |   |       |-- doc.js
    |   |   |   |-- kibana
    |   |   |   |   |-- _apps.js
    |   |   |   |   |-- _init.js
    |   |   |   |   |-- _timepicker.html
    |   |   |   |   |-- _timepicker.js
    |   |   |   |   |-- index.js
    |   |   |   |   |-- kibana.html
    |   |   |   |-- markdown_vis
    |   |   |   |   |-- index.js
    |   |   |   |   |-- markdown_vis.html
    |   |   |   |   |-- markdown_vis.js
    |   |   |   |   |-- markdown_vis.less
    |   |   |   |   |-- markdown_vis_controller.js
    |   |   |   |   |-- markdown_vis_params.html
    |   |   |   |-- metric_vis
    |   |   |   |   |-- index.js
    |   |   |   |   |-- metric_vis.html
    |   |   |   |   |-- metric_vis.js
    |   |   |   |   |-- metric_vis.less
    |   |   |   |   |-- metric_vis_controller.js
    |   |   |   |   |-- metric_vis_params.html
    |   |   |   |-- settings
    |   |   |   |   |-- app.html
    |   |   |   |   |-- index.js
    |   |   |   |   |-- saved_object_registry.js
    |   |   |   |   |-- sections
    |   |   |   |   |   |-- index.js
    |   |   |   |   |   |-- about
    |   |   |   |   |   |   |-- barcode.svg
    |   |   |   |   |   |   |-- index.html
    |   |   |   |   |   |   |-- index.js
    |   |   |   |   |   |-- advanced
    |   |   |   |   |   |   |-- advanced_row.html
    |   |   |   |   |   |   |-- advanced_row.js
    |   |   |   |   |   |   |-- index.html
    |   |   |   |   |   |   |-- index.js
    |   |   |   |   |   |-- indices
    |   |   |   |   |   |   |-- _create.html
    |   |   |   |   |   |   |-- _create.js
    |   |   |   |   |   |   |-- _date_scripts.js
    |   |   |   |   |   |   |-- _edit.html
    |   |   |   |   |   |   |-- _edit.js
    |   |   |   |   |   |   |-- _field_name.html
    |   |   |   |   |   |   |-- _field_popularity.html
    |   |   |   |   |   |   |-- _field_type.html
    |   |   |   |   |   |   |-- _field_types.js
    |   |   |   |   |   |   |-- _indexed_fields.html
    |   |   |   |   |   |   |-- _indexed_fields.js
    |   |   |   |   |   |   |-- _refresh_kibana_index.js
    |   |   |   |   |   |   |-- _scripted_field_controls.html
    |   |   |   |   |   |   |-- _scripted_fields.html
    |   |   |   |   |   |   |-- _scripted_fields.js
    |   |   |   |   |   |   |-- index.html
    |   |   |   |   |   |   |-- index.js
    |   |   |   |   |   |   |-- scripted_fields
    |   |   |   |   |   |       |-- index.html
    |   |   |   |   |   |       |-- index.js
    |   |   |   |   |   |-- objects
    |   |   |   |   |       |-- _objects.html
    |   |   |   |   |       |-- _objects.js
    |   |   |   |   |       |-- _view.html
    |   |   |   |   |       |-- _view.js
    |   |   |   |   |       |-- index.js
    |   |   |   |   |-- styles
    |   |   |   |       |-- main.less
    |   |   |   |-- table_vis
    |   |   |   |   |-- index.js
    |   |   |   |   |-- table_vis.html
    |   |   |   |   |-- table_vis.js
    |   |   |   |   |-- table_vis.less
    |   |   |   |   |-- table_vis_controller.js
    |   |   |   |   |-- table_vis_params.html
    |   |   |   |   |-- table_vis_params.js
    |   |   |   |-- vis_debug_spy
    |   |   |   |   |-- index.js
    |   |   |   |   |-- vis_debug.html
    |   |   |   |   |-- vis_debug.js
    |   |   |   |-- vis_types
    |   |   |   |   |-- _renderbot.js
    |   |   |   |   |-- _schemas.js
    |   |   |   |   |-- _vis_type.js
    |   |   |   |   |-- index.js
    |   |   |   |   |-- controls
    |   |   |   |   |   |-- rows_or_columns.html
    |   |   |   |   |   |-- vislib_basic_options.html
    |   |   |   |   |   |-- vislib_basic_options.js
    |   |   |   |   |-- template
    |   |   |   |   |   |-- _template_renderbot.js
    |   |   |   |   |   |-- template_vis_type.js
    |   |   |   |   |-- vislib
    |   |   |   |       |-- _build_chart_data.js
    |   |   |   |       |-- _vislib_renderbot.js
    |   |   |   |       |-- _vislib_vis_type.js
    |   |   |   |       |-- area.js
    |   |   |   |       |-- histogram.js
    |   |   |   |       |-- line.js
    |   |   |   |       |-- pie.js
    |   |   |   |       |-- tile_map.js
    |   |   |   |       |-- editors
    |   |   |   |           |-- area.html
    |   |   |   |           |-- basic.html
    |   |   |   |           |-- histogram.html
    |   |   |   |           |-- pie.html
    |   |   |   |           |-- tile_map.html
    |   |   |   |-- visualize
    |   |   |       |-- index.js
    |   |   |       |-- editor
    |   |   |       |   |-- add_bucket_agg.js
    |   |   |       |   |-- advanced_toggle.html
    |   |   |       |   |-- agg.html
    |   |   |       |   |-- agg.js
    |   |   |       |   |-- agg_add.html
    |   |   |       |   |-- agg_add.js
    |   |   |       |   |-- agg_filter.js
    |   |   |       |   |-- agg_group.html
    |   |   |       |   |-- agg_group.js
    |   |   |       |   |-- agg_param.js
    |   |   |       |   |-- agg_params.html
    |   |   |       |   |-- agg_params.js
    |   |   |       |   |-- agg_select.html
    |   |   |       |   |-- editor.html
    |   |   |       |   |-- editor.js
    |   |   |       |   |-- nesting_indicator.js
    |   |   |       |   |-- sidebar.html
    |   |   |       |   |-- sidebar.js
    |   |   |       |   |-- vis_options.html
    |   |   |       |   |-- vis_options.js
    |   |   |       |   |-- panels
    |   |   |       |   |   |-- load.html
    |   |   |       |   |   |-- save.html
    |   |   |       |   |   |-- share.html
    |   |   |       |   |-- styles
    |   |   |       |       |-- editor.less
    |   |   |       |-- saved_visualizations
    |   |   |       |   |-- _saved_vis.js
    |   |   |       |   |-- saved_visualizations.js
    |   |   |       |-- styles
    |   |   |       |   |-- main.less
    |   |   |       |-- wizard
    |   |   |           |-- step_1.html
    |   |   |           |-- step_2.html
    |   |   |           |-- wizard.js
    |   |   |-- registry
    |   |   |   |-- _registry.js
    |   |   |   |-- apps.js
    |   |   |   |-- spy_modes.js
    |   |   |   |-- vis_types.js
    |   |   |-- services
    |   |   |   |-- compile_recursive_directive.js
    |   |   |   |-- debounce.js
    |   |   |   |-- es.js
    |   |   |   |-- private.js
    |   |   |   |-- promises.js
    |   |   |   |-- timefilter.js
    |   |   |-- styles
    |   |   |   |-- _bootstrap.less
    |   |   |   |-- _callout.less
    |   |   |   |-- _control_group.less
    |   |   |   |-- _font_icons.less
    |   |   |   |-- _glyphicons.less
    |   |   |   |-- _hintbox.less
    |   |   |   |-- _input.less
    |   |   |   |-- _mixins.less
    |   |   |   |-- _navbar.less
    |   |   |   |-- _notify.less
    |   |   |   |-- _pagination.less
    |   |   |   |-- _sidebar.less
    |   |   |   |-- _spinner.less
    |   |   |   |-- _table.less
    |   |   |   |-- _truncate.less
    |   |   |   |-- _variables.less
    |   |   |   |-- main.less
    |   |   |   |-- theme
    |   |   |       |-- _theme.less
    |   |   |       |-- _variables.less
    |   |   |       |-- elk.ico
    |   |   |-- utils
    |   |       |-- _mixins.js
    |   |       |-- _mixins_chainable.js
    |   |       |-- _mixins_notchainable.js
    |   |       |-- add_word_breaks.js
    |   |       |-- brush_event.js
    |   |       |-- config_template.js
    |   |       |-- datemath.js
    |   |       |-- decode_geo_hash.js
    |   |       |-- diff_object.js
    |   |       |-- diff_time_picker_vals.js
    |   |       |-- esBool.js
    |   |       |-- html_escape.js
    |   |       |-- key_map.js
    |   |       |-- mapping_setup.js
    |   |       |-- modules.js
    |   |       |-- next_tick.js
    |   |       |-- no_white_space.js
    |   |       |-- ordinal_suffix.js
    |   |       |-- query_string.js
    |   |       |-- rison.js
    |   |       |-- sequencer.js
    |   |       |-- slugify_id.js
    |   |       |-- versionmath.js
    |   |       |-- indexed_array
    |   |       |   |-- _inflector.js
    |   |       |   |-- _path_getter.js
    |   |       |   |-- index.js
    |   |       |-- routes
    |   |           |-- _setup.js
    |   |           |-- _work_queue.js
    |   |           |-- _wrap_route_with_prep.js
    |   |           |-- index.js
    |   |-- server
    |       |-- .jshintrc
    |       |-- app.js
    |       |-- index.js
    |       |-- bin
    |       |   |-- kibana.bat
    |       |   |-- kibana.js
    |       |   |-- kibana.sh
    |       |-- config
    |       |   |-- index.js
    |       |   |-- kibana.yml
    |       |-- dev
    |       |   |-- _amd_rapper.js
    |       |   |-- _instrumentation.js
    |       |   |-- index.js
    |       |-- lib
    |       |   |-- JSONStream.js
    |       |   |-- StdOutStream.js
    |       |   |-- appHeaders.js
    |       |   |-- auth.js
    |       |   |-- elasticsearch_client.js
    |       |   |-- enforce.js
    |       |   |-- isUpgradeable.js
    |       |   |-- listPlugins.js
    |       |   |-- logger.js
    |       |   |-- migrateConfig.js
    |       |   |-- requestLogger.js
    |       |   |-- serverInitialization.js
    |       |   |-- upgradeConfig.js
    |       |   |-- validateRequest.js
    |       |   |-- waitForEs.js
    |       |-- routes
    |       |   |-- index.js
    |       |   |-- proxy.js
    |       |-- views
    |           |-- error.jade
    |           |-- layout.jade
    |-- tasks
    |   |-- .jshintrc
    |   |-- build.js
    |   |-- chmod_kibana.js
    |   |-- compile_dist_readme.js
    |   |-- create_packages.js
    |   |-- create_shasums.js
    |   |-- default.js
    |   |-- dev.js
    |   |-- download_node_binaries.js
    |   |-- get_build_props.js
    |   |-- jshint.js
    |   |-- kibana_server.js
    |   |-- maybe_start_kibana.js
    |   |-- npm_install_kibana.js
    |   |-- plugin.js
    |   |-- plugins.js
    |   |-- release.js
    |   |-- require_css_deps.js
    |   |-- run_build.js
    |   |-- test.js
    |   |-- touch_config.js
    |   |-- version.js
    |   |-- config
    |   |   |-- clean.js
    |   |   |-- compress.js
    |   |   |-- copy.js
    |   |   |-- esvm.js
    |   |   |-- jade.js
    |   |   |-- jshint.js
    |   |   |-- less.js
    |   |   |-- mocha.js
    |   |   |-- replace.js
    |   |   |-- requirejs.js
    |   |   |-- run.js
    |   |   |-- s3.js
    |   |   |-- saucelabs-mocha.js
    |   |   |-- simplemocha.js
    |   |   |-- watch.js
    |   |-- utils
    |       |-- install_or_update_repo.js
    |       |-- server-config.js
    |       |-- spawn.js
    |       |-- updateVersion.js
    |-- test
        |-- .jshintrc
        |-- unit
        |   |-- index.html
        |   |-- fixtures
        |   |   |-- fake_chart_events.js
        |   |   |-- fake_hierarchical_data.js
        |   |   |-- fake_row.js
        |   |   |-- field_mapping.js
        |   |   |-- filter_skeleton.js
        |   |   |-- hits.js
        |   |   |-- logstash_fields.js
        |   |   |-- mapping_with_dupes.js
        |   |   |-- real_hits.js
        |   |   |-- search_response.js
        |   |   |-- stubbed_doc_source_response.js
        |   |   |-- stubbed_logstash_index_pattern.js
        |   |   |-- stubbed_search_source.js
        |   |   |-- agg_resp
        |   |       |-- date_histogram.js
        |   |-- server
        |   |   |-- lib
        |   |       |-- isUpgradeable.js
        |   |       |-- validateRequest.js
        |   |-- specs
        |   |   |-- apps
        |   |   |   |-- discover
        |   |   |   |   |-- hit_sort_fn.js
        |   |   |   |   |-- directives
        |   |   |   |       |-- discover_field.js
        |   |   |   |       |-- field_calculator.js
        |   |   |   |       |-- field_chooser.js
        |   |   |   |-- doc
        |   |   |       |-- doc.js
        |   |   |-- components
        |   |   |   |-- clipboard.js
        |   |   |   |-- reflow_watcher.js
        |   |   |   |-- watch_multi.js
        |   |   |   |-- agg_response
        |   |   |   |   |-- hierarchical
        |   |   |   |   |   |-- array_to_linked_list.js
        |   |   |   |   |   |-- build_hierarchical_data.js
        |   |   |   |   |   |-- collect_branch.js
        |   |   |   |   |   |-- create_raw_data.js
        |   |   |   |   |   |-- extract_buckets.js
        |   |   |   |   |   |-- transform_aggregation.js
        |   |   |   |   |-- point_series
        |   |   |   |   |   |-- _add_to_siri.js
        |   |   |   |   |   |-- _fake_x_aspect.js
        |   |   |   |   |   |-- _get_aspects.js
        |   |   |   |   |   |-- _get_point.js
        |   |   |   |   |   |-- _get_series.js
        |   |   |   |   |   |-- _init_x_axis.js
        |   |   |   |   |   |-- _init_y_axis.js
        |   |   |   |   |   |-- _main.js
        |   |   |   |   |   |-- _ordered_date_axis.js
        |   |   |   |   |   |-- _tooltip_formatter.js
        |   |   |   |   |   |-- point_series.js
        |   |   |   |   |-- tabify
        |   |   |   |       |-- _buckets.js
        |   |   |   |       |-- _get_columns.js
        |   |   |   |       |-- _integration.js
        |   |   |   |       |-- _response_writer.js
        |   |   |   |       |-- _table.js
        |   |   |   |       |-- _table_group.js
        |   |   |   |       |-- tabify.js
        |   |   |   |-- agg_table
        |   |   |   |   |-- _group.js
        |   |   |   |   |-- _table.js
        |   |   |   |   |-- index.js
        |   |   |   |-- agg_types
        |   |   |   |   |-- _agg_params.js
        |   |   |   |   |-- _agg_type.js
        |   |   |   |   |-- _bucket_count_between.js
        |   |   |   |   |-- index.js
        |   |   |   |   |-- buckets
        |   |   |   |   |   |-- _date_histogram.js
        |   |   |   |   |   |-- _histogram.js
        |   |   |   |   |   |-- _terms.js
        |   |   |   |   |   |-- create_filter
        |   |   |   |   |       |-- date_histogram.js
        |   |   |   |   |       |-- filters.js
        |   |   |   |   |       |-- histogram.js
        |   |   |   |   |       |-- range.js
        |   |   |   |   |       |-- terms.js
        |   |   |   |   |-- controls
        |   |   |   |   |   |-- percent_list.js
        |   |   |   |   |-- param_types
        |   |   |   |   |   |-- _calculate_interval.js
        |   |   |   |   |   |-- _field.js
        |   |   |   |   |   |-- _optioned.js
        |   |   |   |   |   |-- _raw_json.js
        |   |   |   |   |   |-- _regex.js
        |   |   |   |   |   |-- _string.js
        |   |   |   |   |   |-- index.js
        |   |   |   |   |-- utils
        |   |   |   |       |-- _stub_agg_params.js
        |   |   |   |-- courier
        |   |   |   |   |-- search_source
        |   |   |   |       |-- get_normalized_sort.js
        |   |   |   |-- doc_table
        |   |   |   |   |-- doc_table.js
        |   |   |   |   |-- lib
        |   |   |   |       |-- get_sort.js
        |   |   |   |       |-- rows_headers.js
        |   |   |   |-- doc_title
        |   |   |   |   |-- doc_title.js
        |   |   |   |-- doc_viewer
        |   |   |   |   |-- doc_viewer.js
        |   |   |   |-- fancy_forms
        |   |   |   |   |-- fancy_forms.js
        |   |   |   |-- filter_bar
        |   |   |   |   |-- changeTimeFilter.js
        |   |   |   |   |-- dedupFilters.js
        |   |   |   |   |-- extractTimeFilter.js
        |   |   |   |   |-- filterAppliedAndUnwrap.js
        |   |   |   |   |-- filterOutTimeBasedFilter.js
        |   |   |   |   |-- filter_bar.js
        |   |   |   |   |-- generateMappingChain.js
        |   |   |   |   |-- mapAndFlattenFilters.js
        |   |   |   |   |-- mapDefault.js
        |   |   |   |   |-- mapExists.js
        |   |   |   |   |-- mapFilter.js
        |   |   |   |   |-- mapFlattenAndWrapFilters.js
        |   |   |   |   |-- mapMissing.js
        |   |   |   |   |-- mapQueryString.js
        |   |   |   |   |-- mapRange.js
        |   |   |   |   |-- mapScript.js
        |   |   |   |   |-- mapTerms.js
        |   |   |   |   |-- onlyDisabled.js
        |   |   |   |   |-- removeAll.js
        |   |   |   |   |-- removeFilter.js
        |   |   |   |   |-- toggleAll.js
        |   |   |   |   |-- toggleFilter.js
        |   |   |   |   |-- uniqFilters.js
        |   |   |   |-- filter_manager
        |   |   |   |   |-- filter_manager.js
        |   |   |   |   |-- lib
        |   |   |   |       |-- phrase.js
        |   |   |   |       |-- query.js
        |   |   |   |       |-- range.js
        |   |   |   |-- highlight
        |   |   |   |   |-- highlight.js
        |   |   |   |-- index_pattern
        |   |   |   |   |-- _cast_mapping_type.js
        |   |   |   |   |-- _field_formats.js
        |   |   |   |   |-- _get_computed_fields.js
        |   |   |   |   |-- _index_pattern.js
        |   |   |   |   |-- _map_field.js
        |   |   |   |   |-- _pattern_to_wildcard.js
        |   |   |   |   |-- index.js
        |   |   |   |-- listen
        |   |   |   |   |-- listen.js
        |   |   |   |-- paginated_table
        |   |   |   |   |-- index.js
        |   |   |   |-- setup
        |   |   |   |   |-- check_es_version.js
        |   |   |   |-- style_compile
        |   |   |   |   |-- style_compile.js
        |   |   |   |-- vis
        |   |   |       |-- _agg_config.js
        |   |   |       |-- _agg_config_result.js
        |   |   |       |-- _agg_configs.js
        |   |   |       |-- index.js
        |   |   |       |-- vis.js
        |   |   |-- courier
        |   |   |   |-- data_source
        |   |   |       |-- decorate_query.js
        |   |   |-- directives
        |   |   |   |-- confirm-click.js
        |   |   |   |-- css_truncate.js
        |   |   |   |-- greater_than.js
        |   |   |   |-- input_whole_number.js
        |   |   |   |-- spinner.js
        |   |   |   |-- timepicker.js
        |   |   |   |-- truncate.js
        |   |   |   |-- typeahead.js
        |   |   |   |-- validate_index_name.js
        |   |   |   |-- validate_json.js
        |   |   |   |-- validate_query.js
        |   |   |-- factories
        |   |   |   |-- base_object.js
        |   |   |   |-- events.js
        |   |   |-- filters
        |   |   |   |-- field_type.js
        |   |   |   |-- label.js
        |   |   |   |-- moment.js
        |   |   |   |-- rison.js
        |   |   |   |-- short_dots.js
        |   |   |   |-- start_from.js
        |   |   |   |-- uriescape.js
        |   |   |-- index_patterns
        |   |   |   |-- flatten_search_response.js
        |   |   |   |-- intervals.js
        |   |   |-- plugins
        |   |   |   |-- markdown_vis
        |   |   |   |   |-- markdown_vis_controller.js
        |   |   |   |-- metric_vis
        |   |   |   |   |-- metric_vis_controller.js
        |   |   |   |-- table_vis
        |   |   |   |   |-- _table_vis.js
        |   |   |   |   |-- _table_vis_controller.js
        |   |   |   |   |-- index.js
        |   |   |   |-- vis_types
        |   |   |       |-- _renderbot.js
        |   |   |       |-- index.js
        |   |   |       |-- vislib
        |   |   |           |-- _build_chart_data.js
        |   |   |           |-- _index.js
        |   |   |           |-- _renderbot.js
        |   |   |-- registry
        |   |   |   |-- index.js
        |   |   |-- services
        |   |   |   |-- debounce.js
        |   |   |   |-- persisted_log.js
        |   |   |   |-- private.js
        |   |   |   |-- storage.js
        |   |   |   |-- url.js
        |   |   |-- state_management
        |   |   |   |-- app_state.js
        |   |   |   |-- global_state.js
        |   |   |   |-- state.js
        |   |   |-- utils
        |   |   |   |-- add_word_breaks.js
        |   |   |   |-- datemath.js
        |   |   |   |-- diff_object.js
        |   |   |   |-- diff_time_picker_vals.js
        |   |   |   |-- ordinal_suffix.js
        |   |   |   |-- sequencer.js
        |   |   |   |-- slugify_id.js
        |   |   |   |-- versionmath.js
        |   |   |   |-- indexed_array
        |   |   |   |   |-- _inflector.js
        |   |   |   |   |-- _path_getter.js
        |   |   |   |   |-- index.js
        |   |   |   |-- mixins
        |   |   |   |   |-- _move.js
        |   |   |   |   |-- _organize_by.js
        |   |   |   |   |-- index.js
        |   |   |   |-- routes
        |   |   |       |-- _get_route_provider.js
        |   |   |       |-- _work_queue.js
        |   |   |       |-- _wrap_route_with_prep.js
        |   |   |       |-- index.js
        |   |   |-- vislib
        |   |       |-- index.js
        |   |       |-- vis.js
        |   |       |-- components
        |   |       |   |-- color.js
        |   |       |   |-- labels.js
        |   |       |   |-- zero_injection.js
        |   |       |   |-- tooltip
        |   |       |       |-- _positioning.js
        |   |       |       |-- _render.js
        |   |       |       |-- index.js
        |   |       |-- fixture
        |   |       |   |-- _vis_fixture.js
        |   |       |   |-- mock_data
        |   |       |       |-- date_histogram
        |   |       |       |   |-- _columns.js
        |   |       |       |   |-- _rows.js
        |   |       |       |   |-- _series.js
        |   |       |       |   |-- _series_neg.js
        |   |       |       |   |-- _series_pos_neg.js
        |   |       |       |   |-- _stacked_series.js
        |   |       |       |-- filters
        |   |       |       |   |-- _columns.js
        |   |       |       |   |-- _rows.js
        |   |       |       |   |-- _series.js
        |   |       |       |-- geohash
        |   |       |       |   |-- _columns.js
        |   |       |       |   |-- _geo_json.js
        |   |       |       |   |-- _rows.js
        |   |       |       |-- histogram
        |   |       |       |   |-- _columns.js
        |   |       |       |   |-- _rows.js
        |   |       |       |   |-- _series.js
        |   |       |       |   |-- _slices.js
        |   |       |       |-- not_enough_data
        |   |       |       |   |-- _one_point.js
        |   |       |       |-- range
        |   |       |       |   |-- _columns.js
        |   |       |       |   |-- _rows.js
        |   |       |       |   |-- _series.js
        |   |       |       |-- significant_terms
        |   |       |       |   |-- _columns.js
        |   |       |       |   |-- _rows.js
        |   |       |       |   |-- _series.js
        |   |       |       |-- stacked
        |   |       |       |   |-- _stacked.js
        |   |       |       |-- terms
        |   |       |           |-- _columns.js
        |   |       |           |-- _rows.js
        |   |       |           |-- _series.js
        |   |       |-- lib
        |   |       |   |-- axis_title.js
        |   |       |   |-- chart_title.js
        |   |       |   |-- data.js
        |   |       |   |-- dispatch.js
        |   |       |   |-- error_handler.js
        |   |       |   |-- legend.js
        |   |       |   |-- resize_checker.js
        |   |       |   |-- x_axis.js
        |   |       |   |-- y_axis.js
        |   |       |   |-- handler
        |   |       |   |   |-- handler.js
        |   |       |   |-- layout
        |   |       |       |-- layout.js
        |   |       |       |-- layout_types.js
        |   |       |       |-- splits
        |   |       |       |   |-- column_chart
        |   |       |       |       |-- splits.js
        |   |       |       |-- types
        |   |       |           |-- column_layout.js
        |   |       |-- visualizations
        |   |           |-- area_chart.js
        |   |           |-- chart.js
        |   |           |-- column_chart.js
        |   |           |-- line_chart.js
        |   |           |-- pie_chart.js
        |   |           |-- vis_types.js
        |   |-- tasks
        |       |-- utils
        |           |-- updateVersion.js
        |-- utils
            |-- agg_param_writer.js
            |-- auto_release_sinon.js
            |-- no_digest_promises.js
            |-- simulate_keys.js
            |-- stub_index_pattern.js
            |-- istanbul_reporter
            |   |-- report.clientside.jade
            |   |-- report.jade.js
            |   |-- reporter.js
            |-- sinon
                |-- sinon-1.8.2.js
                |-- sinon-ie-1.8.2.js
                |-- sinon-ie.js
                |-- sinon-server-1.8.2.js
                |-- sinon-timers-1.8.2.js
                |-- sinon-timers-ie-1.8.2.js
                |-- sinon.js
```
